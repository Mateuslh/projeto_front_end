import React, { useState, useEffect } from 'react';

const AddContribuinteModal = ({ isOpen, onClose, onSave, contribuinte }) => {
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [tipo, setTipo] = useState('PESSOA_FISICA');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [situacao, setSituacao] = useState('ATIVO'); // Definindo 'ATIVO' como valor inicial

    useEffect(() => {
        if (isOpen && contribuinte) {
            setNome(contribuinte.nome);
            setCodigo(contribuinte.codigo);
            setTipo(contribuinte.tipoContribuinte);
            setCpfCnpj(contribuinte.cpfCnpj);
            setSituacao(contribuinte.situacao);
        }
    }, [isOpen, contribuinte]);

    const handleSave = () => {
        const newContribuinte = {
            id: contribuinte ? contribuinte.id : undefined,
            nome,
            codigo,
            tipoContribuinte: tipo,
            cpfCnpj,
            situacao
        };
        onSave(newContribuinte);
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{contribuinte ? 'Atualizar Contribuinte' : 'Adicionar Contribuinte'}</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Código</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={codigo}
                                        onChange={(e) => setCodigo(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo</label>
                                    <select
                                        className="form-control"
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
                                    >
                                        <option value="PESSOA_FISICA">Pessoa Física</option>
                                        <option value="PESSOA_JURIDICA">Pessoa Jurídica</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">CPF/CNPJ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={cpfCnpj}
                                        onChange={(e) => setCpfCnpj(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Situação</label>
                                    <select
                                        className="form-control"
                                        value={situacao}
                                        onChange={(e) => setSituacao(e.target.value)}
                                    >
                                        <option value="ATIVO">Ativo</option>
                                        <option value="DESATIVADO">Desativado</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>
                                {contribuinte ? 'Atualizar' : 'Salvar'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddContribuinteModal;
