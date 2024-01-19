import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBlock, setMap } from '../../../store/slices/mapSlice.js';
import { changeDepth } from '../../../store/slices/levelSlice.js';

import light from '../../../classes/Light.js';
import map from '../../../classes/Map.js';
import moving from '../../../classes/Moving.js';
import data from '../../../classes/Data.js';

const Block = ({ block, img, tool }) => {
    const dispatch = useDispatch();

    const mapState = useSelector((state) => state.map);
    const levelState = useSelector((state) => state.level);

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

    const setMovedMap = (newMap, breakedBlock) => {
        dispatch(changeDepth());

        newMap = moving.getMovedMap(mapState.blocks, data.getMergedData(), levelState.name);
        breakedBlock = { ...breakedBlock, y: breakedBlock.y - 1 };

        dispatch(setMap(newMap));

        return [newMap, breakedBlock];
    };

    /**
     * Ломает блок
     * Свойство блока breaked ставит на true и обновляет освещение
     */
    const breakBlock = () => {
        let newMap = mapState.blocks;
        let breakedBlock = getBreakedBlock();

        if (block.y >= 8) [newMap, breakedBlock] = setMovedMap(newMap, breakedBlock);

        setBlocksFromArray(light.getUpdatedMapLight(newMap, breakedBlock));
    };

    /**
     * Наносит урон блоку
     * Свойство блока durability_changed уменьшает на урон взятого инструмента
     */
    const damageBlock = () => {
        const durability = map.getBlockDurability(mapState.blocks, block.x, block.y);

        const temp = {
            x: block.x,
            y: block.y,
            durability_changed: durability - tool.damage
        };

        dispatch(setBlock(temp));
    };

    /**
     * Проверяет нанести урон блоку или сломать его
     */
    const checkBlockToBreak = () => {
        const { damage } = tool;
        const durability = map.getBlockDurability(mapState.blocks, block.x, block.y);

        if (durability - damage > 0) damageBlock();
        if (durability - damage <= 0) breakBlock();
    };

    /**
     * Возвращает процент заполнения полоски здоровья
     * @param {*} durability number
     * @returns number
     */
    const getHealthBarPercentage = (durability) => {
        return Math.floor((durability / block.durability) * 100);
    };

    /**
     * Возвращает стили полоски здоровья относительно его прочности
     * @param {*} durability number
     * @returns object
     */
    const getHealthBarStyles = (durability) => {
        const percentage = getHealthBarPercentage(durability);

        const styles = {
            backgroundColor: '#17A400',
            width: 'calc(100% - 10px)'
        };

        if (percentage >= 75) styles.backgroundColor = '#17A400';
        if (percentage >= 35 && percentage < 75) styles.backgroundColor = '#BB9D00';
        if (percentage < 35) styles.backgroundColor = '#CC0000';

        styles.width = `calc(${percentage}% - 10px)`;

        return styles;
    };

    return (
        <button
            onClick={() => checkBlockToBreak()}
            disabled={block.light == '2' ? false : true}
            className={`map__block map__${block.name} ${findLightClass()} ${findClassBreaked()}`}>
            <img src={img} alt={block.name} />
            <div
                className="map__block-health-bar"
                style={getHealthBarStyles(
                    map.getBlockDurability(mapState.blocks, block.x, block.y)
                )}></div>
        </button>
    );
};

export default Block;
