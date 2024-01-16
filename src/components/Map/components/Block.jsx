import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlock } from '../../../store/slices/mapSlice.js';
import light from '../../../classes/Light.js';
import map from '../../../classes/Map.js';

const Block = ({ block, img, tool }) => {
    const dispatch = useDispatch();
    const [healthBarStyle, setHealthBarStyle] = useState({});

    const mapState = useSelector((state) => state.map);

    /**
     * Возвращает сломанный блок
     * @returns object
     */
    const getBreakedBlock = () => {
        return { x: block.x, y: block.y, breaked: true };
    };

    /**
     * Устанавливает в стейт карты блоки из массива
     */
    const setBlocksFromArray = (array) => {
        for (const block of array) {
            dispatch(setBlock(block));
        }
    };

    /**
     * Возвращает класс согласно освещению блока
     */
    const findLightClass = () => {
        const lightLevels = ['dark', 'halfdark', 'light'];

        return lightLevels[block.light];
    };

    /**
     * Возвращает класс сломанного блока(если сломан)
     */
    const findClassBreaked = () => {
        return block.breaked ? 'breaked' : '';
    };

    /**
     * Функция-обертка для ломания блока
     */
    const breakBlock = () => {
        setBlocksFromArray(light.getUpdatedMapLight(mapState.blocks, getBreakedBlock()));
    };

    /**
     * Устанавливает стили полоске прочности
     * @param {*} percentage
     */
    const setHealthBar = (percentage) => {
        let color;

        if (percentage >= 75) color = '#17A400';
        if (percentage >= 35 && percentage < 75) color = '#BB9D00';
        if (percentage < 35) color = '#CC0000';

        let styles = {};

        styles.backgroundColor = color;
        styles.width = `calc(${percentage}% - 10px)`;
        styles.display = 'block';

        setHealthBarStyle(styles);
    };

    /**
     * Наносит урон блоку
     */
    const beatBlock = () => {
        const durability_changed = getBlockDurability();

        const temp = {
            x: block.x,
            y: block.y,
            durability_changed: durability_changed - tool.damage
        };

        setHealthBar(getHealthBarWidth(durability_changed - tool.damage));

        dispatch(setBlock(temp));
    };

    /**
     * Проверяет нанести урон блоку или сломать его
     */
    const checkBlockToBreak = () => {
        const { damage } = tool;
        const durability_changed = getBlockDurability();

        if (durability_changed - damage <= 0) {
            breakBlock();
            return;
        }

        beatBlock();
    };

    /**
     * Возвращает ширину полоски здоровья
     * @param durability_changed number
     * @returns number
     */
    const getHealthBarWidth = (durability_changed) => {
        return Math.round((durability_changed / block.durability) * 100);
    };

    /**
     * Возвращает прочность блока
     * @returns number
     */
    const getBlockDurability = () => {
        return map.getBlock(mapState.blocks, block.x, block.y).durability_changed;
    };

    return (
        <button
            onClick={() => checkBlockToBreak()}
            disabled={block.light == '2' ? false : true}
            className={`map__block map__${block.name} ${findLightClass()} ${findClassBreaked()}`}>
            <img src={img} alt={block.name} />
            <div className="map__block-health-bar" style={healthBarStyle}></div>
        </button>
    );
};

export default Block;
