import React from 'react';
import data from '../../classes/Data';

const ItemPreview = ({ items }) => {
    /**
     * Возвращает текст превью предметов
     * @returns string
     */
    const getText = () => {
        if (items.items.length > 1) return 'Новые предметы!';

        return 'Новый предмет!';
    };

    const { tools, materials, skills } = data.getMergedData();

    /**
     * Возвращает массив данных в зависимости от типа предмета
     * @param {*} type tool/material/skill
     * @returns array
     */
    const getArray = (type) => {
        switch (type) {
            case 'tool':
                return tools;
            case 'material':
                return materials;
            case 'skill':
                return skills;
        }
    };

    return (
        <div className={items.isOpen ? 'items-preview__wrap active' : 'items-preview__wrap'}>
            <h2 className="items-preview__title">{getText()}</h2>
            <div className="items-preview__content">
                {items.items.map((item, i) => {
                    const itemData = data.find(getArray(item.type), item.name);

                    return (
                        <div key={i} className="items-preview__item">
                            <div className="items-preview__item-name">
                                {itemData.text_name} <br />
                            </div>
                            <div className="items-preview__item-img">
                                <img src={itemData.img} alt={itemData.name} />
                                {item.count ? <span>{item.count}</span> : ''}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ItemPreview;
