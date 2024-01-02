import React from 'react';
import Modal from '../Modal/Modal.jsx';
import BlocksTable from './components/BlocksTable.jsx';
import ToolsTable from './components/ToolsTable.jsx';
import SkillsTable from './components/SkillsTable.jsx';
import LevelsTable from './components/LevelsTable.jsx';
import other from '../../classes/Other.js';
import game_data from '../../static/data/game_data.js';
import text_data from '../../static/data/text_data.js';
import img_data from '../../static/data/img_data.js';

const InfoModal = ({ isOpen, setModal }) => {
    const data = other.mergeObjects(game_data, other.mergeObjects(img_data, text_data))

    return (
        <Modal isOpen={isOpen} setModal={setModal} className='info-modal'>
            <h2 className='info-modal__title'>Информация</h2>
            <div className='info-modal__content'>
                <BlocksTable blocks={data.blocks} materials={data.materials}/>
                <LevelsTable levels={data.levels} materials={data.materials} blocks={data.blocks}/>
                <ToolsTable tools={data.tools} materials={data.materials}/>
                <SkillsTable skills={data.skills} materials={data.materials} tools={data.tools}/>
            </div>
        </Modal>
    );
};

export default InfoModal;
