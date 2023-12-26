import React from 'react';
import { close } from '../../assets/icons/group.js';

const Modal = ({ children, isOpen, setModal, className }) => {
    const closeModal = () => {setModal(false)};

    return (
        <aside
            className={isOpen ? 'modal__wrap active' : 'modal__wrap'}
            onClick={() => closeModal()}>
            <div className={`${className} modal`} onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={() => closeModal()}>
                    <img src={close} alt="close" />
                </button>
                { children }
            </div>
        </aside>
    );
};

export default Modal;