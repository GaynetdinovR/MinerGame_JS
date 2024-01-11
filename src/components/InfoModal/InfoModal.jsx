import React from 'react';
import data from '../../classes/Data.js';

import Modal from '../Modal/Modal.jsx';
import BlocksTable from './components/BlocksTable.jsx';
import ToolsTable from './components/ToolsTable.jsx';
import SkillsTable from './components/SkillsTable.jsx';
import LevelsTable from './components/LevelsTable.jsx';

const InfoModal = ({ isOpen, setModal }) => {
    const mergedData = data.getMergedData()

    return (
        <Modal isOpen={isOpen} setModal={setModal} className='info-modal'>
            <h2 className='info-modal__title title'>Информация</h2>
            <div className='info-modal__content'>
                <BlocksTable blocks={mergedData.blocks} materials={mergedData.materials}/>
                <LevelsTable levels={mergedData.levels} materials={mergedData.materials} blocks={mergedData.blocks}/>
                <ToolsTable tools={mergedData.tools} materials={mergedData.materials}/>
                <SkillsTable skills={mergedData.skills} materials={mergedData.materials} tools={mergedData.tools}/>
            </div>
        </Modal>
    );
};

export default InfoModal;
