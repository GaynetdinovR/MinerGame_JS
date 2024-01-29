import React from 'react';
import data from '../../../classes/Data';

import { craft } from '../../../assets/icons/group';
import { useDispatch, useSelector } from 'react-redux';
import { removeMaterials, unlockItem } from '../../../store/slices/inventorySlice';

const ChosenItem = ({ setChosenItem, setPreview, item, materials }) => {
    const dispatch = useDispatch();
    const inventory = useSelector((state) => state.inventory);

    /**
     * Возвращает true/false в зависимости от наличия всех необходимых для крафта ресурсов
     * @returns bool
     */
    const isHasMaterialsToCraft = () => {
        for (const material in item.craft_count) {
            const inventoryMaterialCount = data.find(inventory.materials, material).count;
            const craftMaterialCount = item.craft_count[material];

            if (inventoryMaterialCount < craftMaterialCount) return false;
        }

        return true;
    };

    /**
     * Возвращает следующий инструмент/скилл для крафта
     * @returns object/bool
     */
    const getNextChosenItem = (craftedItemName) => {
        const items = [...inventory.tools, ...inventory.skills];
        const { tools, skills } = data.getMergedData();

        const item = items.filter((item) => item.name != craftedItemName && !item.has)[0];

        return item ? data.find([...tools, ...skills], item.name) : false;
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
        if (!isHasMaterialsToCraft()) return;

        Object.entries(item.craft_count).forEach((elem) => {
            dispatch(removeMaterials({ name: elem[0], count: elem[1] }));
        });

        dispatch(unlockItem(item.name));

        setChosenItem(getNextChosenItem(item.name));

        setPreview({
            isOpen: true,
            items: [{ name: item.name, type: item.buff_text ? 'skill' : 'tool' }]
        });

        setTimeout(() => {
            setPreview({ isOpen: false, items: [] });
        }, 1000);
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
