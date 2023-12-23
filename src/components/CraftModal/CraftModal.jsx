import React from 'react';
import { close } from '../../assets/icons/group.js';
import { useSelector } from 'react-redux';

const CraftModal = ({ setModal, isOpen }) => {
    const closeModal = () => {
        setModal(false);
    };

    return (
        <aside
            className={isOpen ? 'modal active' : 'modal'}
            onClick={() => closeModal()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__close" onClick={() => closeModal()}>
                    <img src={close} alt="close" />
                </div>
            </div>
        </aside>
    );
};

export default CraftModal;