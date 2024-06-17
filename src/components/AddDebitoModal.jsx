import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddDebitoModal({ isOpen, onClose, onSave, debito, contribuintes }) {
    const [formValues, setFormValues] = useState({
        id: debito ? debito.id : null,
        credito: debito ? debito.credito : '',
        contribuinte: debito && debito.contribuinte ? { id: debito.contribuinte.id } : { id: '' },
        ano: debito ? debito.ano : '',
        parcela: debito ? debito.parcela : '',
        situacao: debito ? debito.situacao : '',
        vlLancado: debito ? debito.vlLancado : 0,
        vlCorrecao: debito ? debito.vlCorrecao : 0,
        vlJuros: debito ? debito.vlJuros : 0,
        vlMulta: debito ? debito.vlMulta : 0,
        vlDesconto: debito ? debito.vlDesconto : 0,
        vlBeneficio: debito ? debito.vlBeneficio : 0,
    });

    useEffect(() => {
        if (!isOpen) {
            setFormValues({
                id: null,
                credito: '',
                contribuinte: { id: '' },
                ano: '',
                parcela: '',
                situacao: '',
                vlLancado: 0,
                vlCorrecao: 0,
                vlJuros: 0,
                vlMulta: 0,
                vlDesconto: 0,
                vlBeneficio: 0,
            });
        } else if (debito) {
            setFormValues({
                id: debito.id,
                credito: debito.credito,
                contribuinte: { id: debito.contribuinte.id },
                ano: debito.ano,
                parcela: debito.parcela,
                situacao: debito.situacao,
                vlLancado: debito.vlLancado,
                vlCorrecao: debito.vlCorrecao,
                vlJuros: debito.vlJuros,
                vlMulta: debito.vlMulta,
                vlDesconto: debito.vlDesconto,
                vlBeneficio: debito.vlBeneficio,
            });
        }
    }, [isOpen, debito]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: name === 'contribuinteId' ? { id: value } : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const debitoData = {
                ...formValues,
                contribuinte: {
                    id: formValues.contribuinte.id
                }
            };

            const response = await axios.post('http://localhost:8080/api/debito', debitoData);

            onSave(response.data);

            onClose();
        } catch (error) {

            console.error('Erro ao salvar débito:', error);
        }
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{debito ? 'Atualizar Débito' : 'Adicionar Débito'}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="credito" className="form-label">Crédito</label>
                                <input type="text" className="form-control" id="credito" name="credito" value={formValues.credito} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contribuinteId" className="form-label">Contribuinte</label>
                                <select className="form-control" id="contribuinteId" name="contribuinteId" value={formValues.contribuinte.id} onChange={handleChange}>
                                    <option value="">Selecione um contribuinte</option>
                                    {contribuintes.map((contribuinte) => (
                                        <option key={contribuinte.id} value={contribuinte.id}>{contribuinte.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ano" className="form-label">Ano</label>
                                <input type="text" className="form-control" id="ano" name="ano" value={formValues.ano} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="parcela" className="form-label">Parcela</label>
                                <input type="text" className="form-control" id="parcela" name="parcela" value={formValues.parcela} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="situacao" className="form-label">Situação</label>
                                <input type="text" className="form-control" id="situacao" name="situacao" value={formValues.situacao} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vlLancado" className="form-label">Valor Lançado</label>
                                <input type="number" className="form-control" id="vlLancado" name="vlLancado" value={formValues.vlLancado} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vlCorrecao" className="form-label">Valor Correção</label>
                                <input type="number" className="form-control" id="vlCorrecao" name="vlCorrecao" value={formValues.vlCorrecao} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vlJuros" className="form-label">Valor Juros</label>
                                <input type="number" className="form-control" id="vlJuros" name="vlJuros" value={formValues.vlJuros} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vlMulta" className="form-label">Valor Multa</label>
                                <input type="number" className="form-control" id="vlMulta" name="vlMulta" value={formValues.vlMulta} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vlDesconto" className="form-label">Valor Desconto</label>
                                <input type="number" className="form-control" id="vlDesconto" name="vlDesconto" value={formValues.vlDesconto} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vlBeneficio" className="form-label">Valor Benefício</label>
                                <input type="number" className="form-control" id="vlBeneficio" name="vlBeneficio" value={formValues.vlBeneficio} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">{debito ? 'Atualizar' : 'Adicionar'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddDebitoModal;
