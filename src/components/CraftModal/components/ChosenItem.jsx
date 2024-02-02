import React from 'react';
import data from '../../../classes/Data';

import { craft } from '../../../assets/icons/group';
import { useDispatch, useSelector } from 'react-redux';
import { removeMaterials, unlockItem } from '../../../store/slices/inventorySlice';

import inventory from '../../../classes/Inventory.js';
import other from '../../../classes/Other.js';

const ChosenItem = ({ setChosenItem, setPreview, item, materials }) => {
    const dispatch = useDispatch();
    const inventoryState = useSelector((state) => state.inventory);

    /**
     * Анимация открытия нового инструмента/скилла
     */
    const setPreviewAnimation = () => {
        setPreview({
            isOpen: true,
            items: [{ name: item.name, type: item.buff_text ? 'skill' : 'tool' }]
        });

        other.delay(1000).then(() => setPreview({ isOpen: false, items: [] }));
    };

    /**
     * Делает все необходимое для крафта
     * 1.Проверка на наличие материалов
     * 2.Удаление материалов
     * 3.Разблокирование инструмента/скилла
     * 4.Установка следующего выбранного крафта
     * 5.Показание и закрытие окна с новый инструментом/скиллом
     */
    const craftItem = () => {
        const { name, craft_count } = item;

        if (!inventory.hasMaterials(inventoryState, craft_count)) return;

        dispatch(removeMaterials(Object.entries(craft_count)));

        dispatch(unlockItem(name));

        setChosenItem(inventory.getNextItemToCraft(name, inventoryState));

        setPreviewAnimation();
    };

    return (
        <div className="craft-modal__craft">
            <div className="craft-modal__chosen">
                <div className="craft-modal__chosen-left-side">
                    <div className="craft-modal__chosen-img">
                        <img src={item.img} alt="item" />
                    </div>
                    <div className="craft-modal__chosen-craft-materials">
                        {Object.entries(item.craft_count).map((item, i) => {
                            item[0] = data.find(materials, item[0]).img;
                            return (
                                <div key={i} className="craft-modal__chosen-craft-material">
                                    <img src={item[0]} alt="material" />
                                    <span>{item[1]}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="craft-modal__chosen-right-side">
                    <h3 className="craft-modal__chosen-name">{item.text_name}</h3>
                    {item.damage ? <span>Урон: {item.damage}</span> : ''}
                    {item.possibilities_text ? <p>Особенности: {item.possibilities_text}</p> : ''}
                    {item.description ? <p>Описание: {item.description}</p> : ''}
                    {item.buff_text ? <p>Бафф: {item.buff_text}</p> : ''}
                </div>
            </div>
            <button className="craft-modal__craft-btn" onClick={() => craftItem()}>
                <img src={craft} alt="craft" />
            </button>
        </div>
    );
};

export default ChosenItem;
