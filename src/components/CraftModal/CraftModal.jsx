import React, { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import { useSelector } from 'react-redux';
import Item from './components/Item.jsx';
import ChosenItem from './components/ChosenItem.jsx';
import data from '../../classes/Data.js';

const CraftModal = ({ isOpen, setModal }) => {
    const {name}= useSelector(state => state.level);
    const {tools, skills, materials, levels} = data.getMergedData()
    
    const [chosenTool, setChosenTool] = useState(data.find(tools, 'copper_pickaxe'))

    const {new_skills, new_tools} = data.find(levels, name)

    return (
        <Modal isOpen={isOpen} setModal={setModal} className='craft-modal'>
            <h2 className='craft-modal__title title'>Крафт</h2>
            <div className='craft-modal__content'>
                <div className='craft-modal__list'>
                    {new_tools.map((item, i) => (
                        <Item set={setChosenTool} key={i} tool={data.find(tools, item)} materials={materials}/>
                    ))}
                    {new_skills.map((item, i) => {
                        const temp = (item === 'lucky') ? tools : materials
                        return (<Item set={setChosenTool} key={i} tool={data.find(skills, item)} materials={temp}/>
                    )})}
                </div>
                <div className='craft-modal__chosen-item'>
                    {
                        
                        <ChosenItem tool={chosenTool} materials={(chosenTool.name === 'lucky') ? tools : materials}/>
                    }
                </div>
            </div>
        </Modal>
    );
};

export default CraftModal;