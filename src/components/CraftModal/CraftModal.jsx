import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../classes/Data.js';

import Modal from '../Modal/Modal.jsx';
import CraftItem from './components/CraftItem.jsx';
import ChosenItem from './components/ChosenItem.jsx';

const CraftModal = ({ isOpen, setModal }) => {
    const { name } = useSelector((state) => state.level);
    const { tools, skills, materials, levels } = data.getMergedData();

    const { new_skills, new_tools } = data.find(levels, name);

    const [chosenTool, setChosenTool] = useState(data.find(tools, new_tools[0]));

    return (
        <Modal isOpen={isOpen} setModal={setModal} className="craft-modal">
            <h2 className="craft-modal__title title">Крафт</h2>
            <div className="craft-modal__content">
                <div className="craft-modal__list">
                    {new_tools.map((item, i) => (
                        <CraftItem
                            set={setChosenTool}
                            key={i}
                            tool={data.find(tools, item)}
                            materials={materials}
                        />
                    ))}
                    {new_skills.map((item, i) => {
                        const temp = item === 'lucky' ? tools : materials;
                        return (
                            <CraftItem
                                set={setChosenTool}
                                key={i}
                                tool={data.find(skills, item)}
                                materials={temp}
                            />
                        );
                    })}
                </div>
                <div className="craft-modal__chosen-item">
                    {
                        <ChosenItem
                            tool={chosenTool}
                            materials={chosenTool.name === 'lucky' ? tools : materials}
                        />
                    }
                </div>
            </div>
        </Modal>
    );
};

export default CraftModal;
