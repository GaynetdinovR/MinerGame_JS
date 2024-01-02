import React, { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import { useSelector } from 'react-redux';
import Item from './components/Item.jsx';
import ChosenItem from './components/ChosenItem.jsx';
import other from '../../classes/Other.js';
import game_data from '../../static/data/game_data.js';
import text_data from '../../static/data/text_data.js'
import img_data from '../../static/data/img_data.js'

const CraftModal = ({ isOpen, setModal }) => {
    const {tools, skills, materials} = other.mergeObjects(game_data, other.mergeObjects(img_data, text_data))
    const {newTools, newSkills} = useSelector(state => state.level);
    const [chosenTool, setChosenTool] = useState(other.find(tools, 'copper_pickaxe'))

    return (
        <Modal isOpen={isOpen} setModal={setModal} class='craft-modal'>
            <h2 className='craft-modal__title'>Крафт</h2>
            <div className='craft-modal__content'>
                <div className='craft-modal__list'>
                    {newTools.map((item, i) => (
                        <Item set={setChosenTool} key={i} tool={other.find(tools, item)} materials={materials}/>
                    ))}
                    {newSkills.map((item, i) => (
                        <Item set={setChosenTool} key={i} tool={other.find(skills, item)} materials={materials}/>
                    ))}
                </div>
                <div className='craft-modal__chosen-item'>
                    {
                        <ChosenItem tool={chosenTool} materials={materials}/>
                    }
                </div>
            </div>
        </Modal>
    );
};

export default CraftModal;