import React from 'react';
import data from '../../classes/Data.js';
import { useSelector } from 'react-redux';

import DisplayButton from './components/DisplayButton.jsx';
import { backpack, craft, house, info } from '../../assets/icons/group';

const RightSide = ({ set }) => {
    const { levels } = data.getMergedData();
    const { name, depth } = useSelector((state) => state.level);

    const buttons = [
        { name: 'backpack', img: backpack, setModal: set.inventoryModal },
        { name: 'house', img: house, setModal: set.storeModal },
        { name: 'info', img: info, setModal: set.infoModal },
        { name: 'craft', img: craft, setModal: set.craftModal }
    ];

    return (
        <aside className="right-side">
            <div className="right-side__buttons">
                {buttons.map((btn, i) => (
                    <DisplayButton key={i} name={btn.name} img={btn.img} setModal={btn.setModal} />
                ))}
            </div>

            <span className="right-side__level">
                {data.find(levels, name).text_name}: {depth}м
            </span>
        </aside>
    );
};

export default RightSide;
