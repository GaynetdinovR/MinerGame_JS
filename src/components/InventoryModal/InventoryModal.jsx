import React from 'react';
import { useSelector } from 'react-redux';
import data from '../../classes/Data.js';

import Modal from '../Modal/Modal.jsx';
import InventoryItem from './components/InventoryItem.jsx';

const InventoryModal = ({ isOpen, setModal }) => {
    const toolsState = useSelector((state) => state.inventory.tools);
    const skillsState = useSelector((state) => state.inventory.skills);
    const materialsState = useSelector((state) => state.inventory.materials);

    const { skills, tools, materials } = data.getMergedData();

    return (
        <Modal isOpen={isOpen} setModal={setModal} className="inventory-modal">
            <h2 className="inventory-modal__title title">Инвентарь</h2>
            <div className="inventory-modal__content">
                <h3 className="inventory-modal__subtitle">Материалы</h3>
                <div className="inventory-modal__materials items-inventory">
                    {materialsState.map((material, i) => (
                        <InventoryItem key={i} item={material} array={materials} isBtn={false} />
                    ))}
                </div>
                <h3 className="inventory-modal__subtitle">Инструменты</h3>
                <div className="inventory-modal__tools items-inventory">
                    {toolsState.map((tool, i) => (
                        <InventoryItem key={i} item={tool} array={tools} isBtn={true} />
                    ))}
                </div>
                <h3 className="inventory-modal__subtitle">Скиллы</h3>
                <div className="inventory-modal__skills items-inventory">
                    {skillsState.map((skill, i) => (
                        <InventoryItem key={i} item={skill} array={skills} isBtn={false} />
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default InventoryModal;
