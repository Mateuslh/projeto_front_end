import React, { useState, useEffect } from 'react';

const AddDebitoModal = ({ isOpen, onClose, onSave, debito, contribuintes }) => {
    const [credito, setCredito] = useState('');
    const [ano, setAno] = useState('');
    const [parcela, setParcela] = useState(1);
    const [situacao, setSituacao] = useState('');
    const [contribuinteId, setContribuinteId] = useState('');
    const [vlLancado, setVlLancado] = useState('');
    const [vlCorrecao, setVlCorrecao] = useState('');
    const [vlJuros, setVlJuros] = useState('');
    const [vlMulta, setVlMulta] = useState('');
    const [vlDesconto, setVlDesconto] = useState('');
    const [vlBeneficio, setVlBeneficio] = useState('');

    useEffect(() => {
        if (isOpen) {
            if (debito) {
                setCredito(debito.credito || '');
                setAno(debito.ano || '');
                setParcela(debito.parcela || 1);
                setSituacao(debito.situacao || '');
                setContribuinteId(debito.contribuinte.id || '');
                setVlLancado(debito.vlLancado || '');
                setVlCorrecao(debito.vlCorrecao || '0');
                setVlJuros(debito.vlJuros || '0');
                setVlMulta(debito.vlMulta || '0');
                setVlDesconto(debito.vlDesconto || '0');
                setVlBeneficio(debito.vlBeneficio || '0');
            } else {
                resetForm();
            }
        }
    }, [isOpen, debito]);

    const resetForm = () => {
        setCredito('');
        setAno('');
        setParcela(1);
        setSituacao('');
        setContribuinteId('');
        setVlLancado('');
        setVlCorrecao('0');
        setVlJuros('0');
        setVlMulta('0');
        setVlDesconto('0');
        setVlBeneficio('0');
    };

    const handleSave = () => {
        const newDebito = {
            credito,
            ano,
            parcela,
            situacao,
            contribuinte: { id: contribuinteId },
            vlLancado,
            vlCorrecao,
            vlJuros,
            vlMulta,
            vlDesconto,
            vlBeneficio
        };

        if (debito && debito.id) {
            onSave({ ...newDebito, id: debito.id });
        } else {
            onSave(newDebito);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{debito ? 'Atualizar Débito' : 'Adicionar Débito'}</h5>
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
                                        onChange={(e) => setParcela(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Situação</label>
                                    <select
                                        className="form-control"
                                        value={situacao}
                                        onChange={(e) => setSituacao(e.target.value)}
                                    >
                                        <option value="">Selecione uma situação</option>
                                        <option value="ABERTO">Aberto</option>
                                        <option value="PAGA">Paga</option>
                                        <option value="CANCELADA">Cancelada</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contribuinte</label>
                                    <select
                                        className="form-control"
                                        value={contribuinteId}
                                        onChange={(e) => setContribuinteId(e.target.value)}
                                    >
                                        <option value="">Selecione um contribuinte</option>
                                        {contribuintes.map(contribuinte => (
                                            <option key={contribuinte.id} value={contribuinte.id}>
                                                {contribuinte.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Lançado</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={vlLancado}
                                        onChange={(e) => setVlLancado(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Correção</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={vlCorrecao}
                                        onChange={(e) => setVlCorrecao(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Juros</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={vlJuros}
                                        onChange={(e) => setVlJuros(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Multa</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={vlMulta}
                                        onChange={(e) => setVlMulta(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Desconto</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={vlDesconto}
                                        onChange={(e) => setVlDesconto(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor Benefício</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={vlBeneficio}
                                        onChange={(e) => setVlBeneficio(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => { onClose(); resetForm(); }}>
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>
                                {debito ? 'Atualizar' : 'Salvar'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddDebitoModal;
