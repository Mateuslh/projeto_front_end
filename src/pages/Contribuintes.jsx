import React, { useState } from 'react';
import { TabContribuintes } from '../components/contribuinte/TabContribuintes.jsx';
import AddContribuinteModal from '../components/contribuinte/AddContribuinteModal.jsx';

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
