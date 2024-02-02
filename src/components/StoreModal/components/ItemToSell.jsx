import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMaterial, removeMaterial } from '../../../store/slices/inventorySlice';

import { coins } from '../../../assets/icons/group';

import inventory from '../../../classes/Inventory';

const ItemToSell = ({ item }) => {
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);

    const setInputCountValidate = (value) => {
        setInputCount(value.replace(/[+\-.]/g, ''));
    };

    const inventoryState = useSelector((state) => state.inventory);

    /**
     * Проверка условий для продажи
     * @returns bool
     */
    const checkSellConditions = () => {
        if (!inputCount) return;

        const hasMaterials = inventory.hasMaterials(inventoryState, {
            [item.name]: inputCount * 10
        });

        return hasMaterials;
    };

    /**
     * Делает все необходимое для продажи
     * 1.Проверка на наличие материалов
     * 2.Удаление материалов из инвентаря
     * 3.Добавление монет
     */
    const sell = () => {
        const { name, price_to_10 } = item;

        if (!checkSellConditions()) return;

        dispatch(removeMaterial({ name: name, count: inputCount * 10 }));

        dispatch(addMaterial({ name: 'coins', count: price_to_10 * inputCount }));

        setInputCount(0);
    };

    return (
        <div className="to-sell__item">
            <div className="to-sell__item-name">{item.text_name}</div>
            <div className="to-sell__item-img">
                <img src={item.img} alt="material" />
            </div>
            <div className="to-sell__item-price">
                <span>Цена за 10 шт:</span>
                <div>
                    <img src={coins} alt="coins" />
                    <span>{item.price_to_10}</span>
                </div>
            </div>
            <input
                onChange={(e) => setInputCountValidate(e.target.value)}
                className="to-buy__input"
                type="number"
                value={inputCount}
            />
            <button onClick={() => sell()} className="to-sell__btn">
                Sell
            </button>
        </div>
    );
};

export default ItemToSell;
