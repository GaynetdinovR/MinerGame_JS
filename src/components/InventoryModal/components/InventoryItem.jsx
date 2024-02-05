import React from 'react';
import { useDispatch } from 'react-redux';
import { equipTool } from '../../../store/slices/inventorySlice.js';
import data from '../../../classes/Data.js';

import { padlock } from '../../../assets/icons/group.js';

const InventoryItem = ({ item, array, isBtn }) => {
    const dispatch = useDispatch();

    const itemData = data.find(array, item.name);

    /**
     * Возвращает элемент кнопки
     * @returns react-elem
     */
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

    /**
     * Возвращает замок
     * @returns react-elem
     */
    const getPadlock = () => {
        return <img className="padlock" src={padlock} alt="padlock" />;
    };

    /**
     * Возвращает надпись количества
     * @returns react-elem
     */
    const getCount = () => {
        return <div className="items-inventory__item-count">{item.count}</div>;
    };

    /**
     * Возвращает название класса
     * @returns string
     */
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
