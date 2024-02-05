import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMaterial, removeMaterial } from '../../../store/slices/inventorySlice.js';

import { coins } from '../../../assets/icons/group';

import inventory from '../../../classes/Inventory.js';

const ItemToBuy = ({ item, isInput }) => {
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);

    /**
     * Валидирует значение input'а
     */
    const setInputCountValidate = (value) => {
        setInputCount(value.replace(/[+\-.]/g, ''));
    };

    const inventoryState = useSelector((state) => state.inventory);

    const input = (
        <input
            onChange={(e) => setInputCountValidate(e.target.value)}
            className="to-buy__input"
            type="number"
            value={inputCount}
        />
    );

    /**
     * Проверка условий для покупки
     * @returns bool
     */
    const checkBuyConditions = () => {
        if (!inputCount) return;

        const hasMaterials = inventory.hasMaterials(inventoryState, {
            coins: inputCount * item.price_to_10
        });

        return hasMaterials;
    };

    /**
     * Делает все необходимое для покупки
     * 1.Проверка на наличие монет
     * 2.Удаление монет из инвентаря
     * 3.Добавление купленных материалов
     */
    const buy = () => {
        const { name, price_to_10 } = item;

        if (!checkBuyConditions()) return;

        dispatch(removeMaterial({ name: 'coins', count: inputCount * price_to_10 }));

        dispatch(addMaterial({ name: name, count: inputCount * 10 }));

        setInputCount(0);
    };

    return (
        <div className="to-buy__item">
            <div className="to-buy__item-name">{item.text_name}</div>
            <div className="to-buy__item-img">
                <img src={item.img} alt="material" />
            </div>
            <div className="to-buy__item-price">
                <span>{item.price_to_10 ? 'Цена за 10 шт:' : 'Цена:'}</span>
                <div>
                    <img src={coins} alt="coins" />
                    <span>{item.price_to_10 ? item.price_to_10 : item.price}</span>
                </div>
            </div>
            <div>{isInput ? input : ''}</div>
            <button onClick={() => buy()} className="to-buy__btn">
                Buy
            </button>
        </div>
    );
};

export default ItemToBuy;
