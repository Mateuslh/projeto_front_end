import React, { useState } from 'react';


const AddDebitoModal = ({ isOpen, onClose, onSave, contribuintes }) => {
    const [credito, setCredito] = useState('');
    const [ano, setAno] = useState('');
    const [parcela, setParcela] = useState(1);
    const [situacao, setSituacao] = useState('');
    const [vlLancado, setVlLancado] = useState('');
    const [vlCorrecao, setVlCorrecao] = useState('');
    const [vlJuros, setVlJuros] = useState('');
    const [vlMulta, setVlMulta] = useState('');
    const [vlDesconto, setVlDesconto] = useState('');
    const [vlBeneficio, setVlBeneficio] = useState('');
    const [selectedContribuinte, setSelectedContribuinte] = useState('');

    const handleSave = () => {
        
        const selectedContribuinteObj = contribuintes.find(contribuinte => contribuinte.nome === selectedContribuinte);

        const newDebito = {
            contribuinte: {
                id: selectedContribuinteObj.id,
            },
            credito,
            ano,
            parcela,
            situacao,
            vlLancado,
            vlCorrecao,
            vlJuros,
            vlMulta,
            vlDesconto,
            vlBeneficio,
        };
        onSave(newDebito);
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Adicionar Débito</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Crédito</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={credito}
                                        onChange={(e) => setCredito(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ano</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={ano}
                                        onChange={(e) => setAno(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Parcela</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={parcela}
                                        onChange={(e) => setParcela(parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Situação</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={situacao}
                                        onChange={(e) => setSituacao(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Lançado</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={vlLancado}
                                        onChange={(e) => setVlLancado(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Correção</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={vlCorrecao}
                                        onChange={(e) => setVlCorrecao(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Juros</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={vlJuros}
                                        onChange={(e) => setVlJuros(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Multa</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={vlMulta}
                                        onChange={(e) => setVlMulta(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Desconto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={vlDesconto}
                                        onChange={(e) => setVlDesconto(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Benefício</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={vlBeneficio}
                                        onChange={(e) => setVlBeneficio(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nome do Contribuinte</label>
                                    <select
                                        className="form-control"
                                        value={selectedContribuinte}
                                        onChange={(e) => setSelectedContribuinte(e.target.value)}
                                    >
                                        <option value="">Selecione um contribuinte</option>
                                        {contribuintes.map((contribuinte) => (
                                            <option key={contribuinte.id} value={contribuinte.nome}>{contribuinte.nome}</option>
                                        ))}
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddDebitoModal;
