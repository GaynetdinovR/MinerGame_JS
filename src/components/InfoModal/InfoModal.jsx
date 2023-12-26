import React from 'react';
import game_data from '../../static/data/game_data.js' 
import Modal from '../Modal/Modal.jsx';
import BlocksTable from './components/BlocksTable.jsx';
import ToolsTable from './components/ToolsTable.jsx';
import SkillsTable from './components/SkillsTable.jsx';
import LevelsTable from './components/LevelsTable.jsx';

const InfoModal = ({ isOpen, setModal }) => {

    return (
        <Modal isOpen={isOpen} setModal={setModal} className='info-modal'>
            <h2 className='info-modal__title'>Информация</h2>
            <div className='info-modal__content'>
                <BlocksTable blocks={game_data.blocks}/>
                <LevelsTable levels={game_data.levels}/>
                <ToolsTable tools={game_data.tools}/>
                <SkillsTable skills={game_data.skills}/>
            </div>
        </Modal>
    );
};

export default InfoModal;
