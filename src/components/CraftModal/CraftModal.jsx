import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../classes/Data.js';

import Modal from '../Modal/Modal.jsx';
import CraftItem from './components/CraftItem.jsx';
import ChosenItem from './components/ChosenItem.jsx';
import NoneCraft from './components/NoneCraft.jsx';

const CraftModal = ({ setPreview, isOpen, setModal }) => {
    const inventory = useSelector((state) => state.inventory);

    /**
     * Возвращает инструменты, которые не скрафчены
     * @returns array
     */
    const getTools = () => {
        return inventory.tools.filter((tool) => !tool.has).map((tool) => tool.name);
    };

    /**
     * Возвращает скиллы, которые не скрафчены
     * @returns array
     */
    const getSkills = () => {
        return inventory.skills.filter((skill) => !skill.has).map((skill) => skill.name);
    };

    const { tools, skills, materials } = data.getMergedData();
    const [chosenItem, setChosenItem] = useState(data.find(tools, getTools()[0]));

    const isHasCrafts = !!chosenItem;

    /**
     * Возвращает выбранный инструмент для крафта, если необходимо
     * @returns react-elem
     */
    const getChosenItem = () => {
        if (!isHasCrafts) return;

        return (
            <div className="craft-modal__chosen-item">
                <ChosenItem
                    setPreview={setPreview}
                    setChosenItem={setChosenItem}
                    item={chosenItem}
                    materials={chosenItem.name === 'lucky' ? tools : materials}
                />
            </div>
        );
    };

    /**
     * Возвращает список крафтов, если необходимо
     * @returns react-elem
     */
    const getList = () => {
        if (!isHasCrafts) return;

        return (
            <div className="craft-modal__list">
                {getTools().map((item, i) => (
                    <CraftItem
                        set={setChosenItem}
                        key={i}
                        item={data.find(tools, item)}
                        materials={materials}
                    />
                ))}
                {getSkills().map((item, i) => (
                    <CraftItem
                        set={setChosenItem}
                        key={i}
                        item={data.find(skills, item)}
                        materials={item === 'lucky' ? tools : materials}
                    />
                ))}
            </div>
        );
    };

    /**
     * Возвращает окно-пустышку, если необходимо
     * @returns react-elem
     */
    const getNoneCraft = () => {
        if (!isHasCrafts) return <NoneCraft />;
    };

    return (
        <Modal isOpen={isOpen} setModal={setModal} className="craft-modal">
            <h2 className="craft-modal__title title">Крафт</h2>
            <div className={isHasCrafts ? 'craft-modal__content overflow' : 'craft-modal__content'}>
                {getList()}
                {getChosenItem()}
                {getNoneCraft()}
            </div>
        </Modal>
    );
};

export default CraftModal;
