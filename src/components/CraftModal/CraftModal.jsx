import React from 'react';
import Modal from '../Modal/Modal.jsx';

const CraftModal = ({ isOpen, setModal }) => {

    return (
        <Modal isOpen={isOpen} setModal={setModal} class='craft-modal'></Modal>
    );
};

export default CraftModal;