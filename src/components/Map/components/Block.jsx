import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBlock, setMap, setBlocksFromArray } from '../../../store/slices/mapSlice.js';
import { increaseDepth, setLevel } from '../../../store/slices/levelSlice.js';
import {
    addMaterial,
    addMaterials,
    changeInventoryLevel
} from '../../../store/slices/inventorySlice.js';

import map from '../../../classes/Map.js';
import moving from '../../../classes/Moving.js';
import data from '../../../classes/Data.js';
import block from '../../../classes/Block.js';
import other from '../../../classes/Other.js';
import inventory from '../../../classes/Inventory.js';
import level from '../../../classes/Level.js';

const Block = ({ setItemsAtPreview, setMaterialAdded, blockInfo, img }) => {
    const dispatch = useDispatch();

    const mapState = useSelector((state) => state.map);
    const levelState = useSelector((state) => state.level);
    const { tools } = useSelector((state) => state.inventory);

    /**
     * Возвращает данные о выбранном инструменте
     * @returns object
     */
    const getTool = () => {
        const { name, damage } = data.find(
            data.getMergedData().tools,
            inventory.getEquipedTool(tools)
        );

        return { damage: damage, name: name };
    };

    /**
     * Возвращает сломанный блок
     * @returns object
     */
    const getBreakedBlock = () => {
        return { x: blockInfo.x, y: blockInfo.y, breaked: true };
    };

    /**
     * Возвращает класс согласно освещению блока
     */
    const getLightClass = () => {
        return ['dark', 'halfdark', 'light'][blockInfo.light];
    };

    /**
     * Возвращает класс сломанного блока(если сломан)
     */
    const getBreakedClass = () => {
        if (blockInfo.breaked) return 'breaked';
    };

    /**
     * Анимация добавление материала
     * @param {*} formattedMaterial object
     */
    const setMaterialAddedAnimation = (formattedMaterial) => {
        const nullMaterial = { count: 0, name: '-' };

        setMaterialAdded(formattedMaterial);

        other.delay(1000).then(() => setMaterialAdded(nullMaterial));
    };

    /**
     * Анимация добавление материалов из сундука
     * @param {*} materials array
     */
    const setMaterialsFromChestAnimation = (materials) => {
        setItemsAtPreview({
            isOpen: true,
            items: materials.map((item) => {
                return { ...item, type: 'material' };
            })
        });

        other.delay(1000).then(() => setItemsAtPreview({ isOpen: false, items: [] }));
    };

    /**
     * Нужно ли изменить уровень глубины
     */
    const checkToLevelChange = () => {
        const levelName = level.checkToLevelChange(levelState.depth);

        if (levelName) {
            dispatch(changeInventoryLevel(levelName));
            dispatch(setLevel(levelName));
        }
    };

    /**
     * Нужно ли переместить карту
     * @param {*} y number
     * @returns object
     */
    const checkToMoving = (y) => {
        if (!block.isBlockOnMapSide(y)) return getBreakedBlock();

        dispatch(increaseDepth());

        checkToLevelChange();

        const mapCopy = moving.getMovedMap(mapState, data.getMergedData(), levelState.name);
        const breakedBlock = moving.getMovedBreakingBlock(getBreakedBlock());

        dispatch(setMap(mapCopy));

        return breakedBlock;
    };

    /**
     * Передача материала от блока
     * @param {*} material string
     * @param {*} material_count number
     * @param {*} breaked bool
     */
    const checkToMaterialGive = (material, material_count, breaked) => {
        if (!block.isBlockHasMaterial(material, breaked)) return;

        const formattedMaterial = { name: material, count: material_count };

        setMaterialAddedAnimation(formattedMaterial);

        dispatch(addMaterial(formattedMaterial));
    };

    /**
     * Передача материалов от сундука
     * @param materials array
     */
    const checkToChestMaterialGive = (materials) => {
        if (!block.isBlockChest(materials)) return;

        setMaterialsFromChestAnimation(materials);

        dispatch(addMaterials(materials));
    };

    /**
     * Ломает блок
     */
    const breakBlock = () => {
        const { material, material_count, materials, breaked, y } = blockInfo;

        const breakedBlock = checkToMoving(y);

        const changedBlocks = map.getUpdatedBlocksWithBreakedBlock(mapState, breakedBlock);

        dispatch(setBlocksFromArray(changedBlocks));

        checkToMaterialGive(material, material_count, breaked);

        checkToChestMaterialGive(materials);
    };

    /**
     * Наносит урон блоку
     */
    const damageBlock = () => {
        const { x, y } = blockInfo;
        const { damage } = getTool();

        dispatch(setBlock(block.getDamagedBlock(mapState, x, y, damage)));
    };

    /**
     * Проверяет какое нужно выполнить действие
     */
    const checkAction = () => {
        const { damage } = getTool();
        const { x, y } = blockInfo;
        const { durability_changed } = mapState[y][x];

        const isDamage = block.isDamageBlock(durability_changed, damage);

        if (isDamage) damageBlock();
        if (!isDamage) breakBlock();
    };

    /**
     * Возвращает стили полоски здоровья
     * @returns object
     */
    const getHealthBarStyles = () => {
        const { durability, x, y } = blockInfo;
        const { durability_changed } = mapState[y][x];

        return block.getHealthBarStyles(durability_changed, durability);
    };

    return (
        <button
            onClick={() => checkAction()}
            disabled={blockInfo.light == '2' ? false : true}
            className={`map__block map__${blockInfo.name} ${getLightClass()} ${getBreakedClass()}`}>
            <img src={img} alt={blockInfo.name} />
            <div className="map__block-health-bar" style={getHealthBarStyles()}></div>
        </button>
    );
};

export default Block;
