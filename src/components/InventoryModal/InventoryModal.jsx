import React from 'react';
import Modal from '../Modal/Modal.jsx';
import { useSelector } from 'react-redux';
import other from '../../classes/Other.js';
import Item from './components/Item.jsx';

const InventoryModal = ({ isOpen, setModal }) => {
    const toolsState = useSelector(state => state.inventory.tools);
    const skillsState = useSelector(state => state.inventory.skills);

    const {skills, tools} = other.getMergedObject();

    return (
        <Modal isOpen={isOpen} setModal={setModal} class='inventory-modal'>
            <h2 className='inventory-modal__title'>Инвентарь</h2>
            <div className='inventory-modal__content'>
                <h3 className='inventory-modal__subtitle'>Инструменты</h3>
                <div className='inventory-modal__tools'>
                    {toolsState.map(tool => (<Item item={tool} array={tools} isBtn={true}/>))}
                </div>
                <h3 className='inventory-modal__subtitle'>Скиллы</h3>
                <div className='inventory-modal__skills'>
                    {skillsState.map(skill => (<Item item={skill} array={skills} isBtn={false}/>))}
                </div>
            </div>
        </Modal>
    );
};

export default InventoryModal;