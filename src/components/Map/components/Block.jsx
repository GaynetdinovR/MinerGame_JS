import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBlock, setMap, setBlocksFromArray } from '../../../store/slices/mapSlice.js';
import { changeDepth } from '../../../store/slices/levelSlice.js';
import { addMaterial } from '../../../store/slices/inventorySlice.js';

import light from '../../../classes/Light.js';
import map from '../../../classes/Map.js';
import moving from '../../../classes/Moving.js';
import data from '../../../classes/Data.js';

const Block = ({ setMaterialAdded, block, img, tool }) => {
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
     * Возвращает класс согласно освещению блока
     */
    const getLightClass = () => {
        return ['dark', 'halfdark', 'light'][block.light];
    };

    /**
     * Возвращает класс сломанного блока(если сломан)
     */
    const getBreakedClass = () => {
        if (block.breaked) return 'breaked';
    };

    /**
     * Возвращает перемещенную карту
     * @param {*} mapCopy array
     * @param {*} breakedBlock object
     * @returns [array, object]
     */
    const setMovedMap = (mapCopy, breakedBlock) => {
        dispatch(changeDepth());

        mapCopy = moving.getMovedMap(mapState, data.getMergedData(), levelState.name);
        breakedBlock = { ...breakedBlock, y: breakedBlock.y - 1 };

        dispatch(setMap(mapCopy));

        return [mapCopy, breakedBlock];
    };

    /**
     * Анимация появления и исчезновения добавленного материала
     * @param {*} material object
     */
    const addMaterialAnimation = (material) => {
        setMaterialAdded(material);

        setTimeout(() => {
            setMaterialAdded({ count: 0, name: '-' });
        }, 1000);
    };

    const giveMaterialFromBlock = () => {
        const material = { name: block.material, count: block.material_count };

        addMaterialAnimation(material);

        dispatch(addMaterial(material));
    };

    /**
     * Ломает блок
     * Свойство блока breaked ставит на true и обновляет освещение
     */
    const breakBlock = () => {
        const updateLight = (mapCopy, breakedBlock) => {
            dispatch(setBlocksFromArray(light.getUpdatedMapLight(mapCopy, breakedBlock)));
        };

        const checkMaterial = () => {
            if (block.material != undefined && !block.breaked) giveMaterialFromBlock();
        };

        if (block.y >= 8) {
            const [mapCopy, breakedBlock] = setMovedMap(mapState, getBreakedBlock());

            updateLight(mapCopy, breakedBlock);
            checkMaterial();

            return;
        }

        updateLight(mapState, getBreakedBlock());
        checkMaterial();
    };

    /**
     * Наносит урон блоку
     * Свойство блока durability_changed уменьшает на урон взятого инструмента
     */
    const damageBlock = () => {
        const durability = map.getBlockDurability(mapState, block.x, block.y);

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
        const durability = map.getBlockDurability(mapState, block.x, block.y);

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
            className={`map__block map__${block.name} ${getLightClass()} ${getBreakedClass()}`}>
            <img src={img} alt={block.name} />
            <div
                className="map__block-health-bar"
                style={getHealthBarStyles(
                    map.getBlockDurability(mapState, block.x, block.y)
                )}></div>
        </button>
    );
};

export default Block;
