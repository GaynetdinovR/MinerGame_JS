import React from 'react';
import { useDispatch } from 'react-redux';
import { equipTool } from '../../../store/slices/inventorySlice.js';
import data from '../../../classes/Data.js';

import { padlock } from '../../../assets/icons/group.js';

const InventoryItem = ({ item, array, isBtn }) => {
    const dispatch = useDispatch();

    const itemData = data.find(array, item.name);

    const getBtn = () => {
        return (
            <button
                onClick={() => {
                    dispatch(equipTool(item.name));
                }}
                className="items-inventory__item-btn">
                {item.equiped ? 'Unequip' : 'Equip'}
            </button>
        );
    };

    const getPadlock = () => {
        return <img className="padlock" src={padlock} alt="padlock" />;
    };

    const getCount = () => {
        return <div className="items-inventory__item-count">{item.count}</div>;
    };

    const getClassName = () => {
        return item.has || item.has == undefined
            ? 'items-inventory__item'
            : 'items-inventory__item blocked';
    };

    return (
        <div className={getClassName()}>
            <div className="items-inventory__item-name">{itemData.text_name}</div>
            <div className="items-inventory__item-img">
                <img src={itemData.img} alt={item.name} />
            </div>
            {item.count != undefined ? getCount() : ''}
            {isBtn ? getBtn() : ''}
            {!item.has && item.has != undefined ? getPadlock() : ''}
        </div>
    );
};

export default InventoryItem;
