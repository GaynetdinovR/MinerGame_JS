import React from 'react';
import Modal from '../Modal/Modal.jsx';

const InventoryModal = ({ isOpen, setModal }) => {
    return (
        <Modal isOpen={isOpen} setModal={setModal} class='inventory-modal'></Modal>
    );
};

export default InventoryModal;