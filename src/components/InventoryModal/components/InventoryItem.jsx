import React from 'react';
import { useDispatch } from 'react-redux';
import { equipTool } from '../../../store/slices/inventorySlice.js';
import data from '../../../classes/Data.js';

import { padlock } from '../../../assets/icons/group.js';

const InventoryItem = ({ item, array, isBtn }) => {
    const dispatch = useDispatch();

    const { has, name } = item;
    const itemData = data.find(array, name);

    const padlockImg = has ? '' : <img className="padlock" src={padlock} alt="padlock" />;
    let equipButton;

    if (isBtn) {
        const btn_text = item.equiped ? 'Unequip' : 'Equip';

        equipButton = (
            <button
                onClick={() => {
                    dispatch(equipTool(name));
                }}
                className="items-inventory__item-btn">
                {btn_text}
            </button>
        );
    }

    return (
        <div className={has ? 'items-inventory__item' : 'items-inventory__item blocked'}>
            <div className="items-inventory__item-name">{itemData.text_name}</div>
            <div className="items-inventory__item-img">
                <img src={itemData.img} alt="skill" />
            </div>
            {equipButton}
            {padlockImg}
        </div>
    );
};

export default InventoryItem;
