import React from 'react';
import Modal from '../Modal/Modal.jsx';

const StoreModal = ({ isOpen, setModal }) => {
    return (
        <Modal isOpen={isOpen} setModal={setModal} class='store-modal'></Modal>
    );
};

export default StoreModal;