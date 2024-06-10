import React, { useState } from 'react';
import { TabContribuintes } from '../components/TabContribuintes';
import AddContribuinteModal from '../components/AddContribuinteModal';

const Contribuintes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contribuintes, setContribuintes] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveContribuinte = (contribuinte) => {
    setContribuintes([...contribuintes, contribuinte]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>Contribuintes</h1>
          <p>Aqui abaixo é necessário adicionar o CRUD para adicionar os contribuintes.</p>
          <button className="btn btn-primary" onClick={handleOpenModal}>
            Adicionar Contribuinte
          </button>
          <TabContribuintes data={contribuintes} />
          <AddContribuinteModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveContribuinte}
          />
        </div>
      </div>
    </div>
  );
};

export default Contribuintes;
