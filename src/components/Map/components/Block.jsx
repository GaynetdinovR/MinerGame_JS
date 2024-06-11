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
    const skillsState = useSelector((state) => state.skills);
    const { tools } = useSelector((state) => state.inventory);

    /**
     * Возвращает данные о выбранном инструменте
     * @returns object
     */
    const getTool = () => {
        let { name, damage } = data.find(
            data.getMergedData().tools,
            inventory.getEquipedTool(tools)
        );

        if (skillsState.isMoreEfforts) damage *= 2;

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

    const checkBreakedBlock = (y) => {
        if (!block.isBlockOnMapSide(y)) return getBreakedBlock();

        return moving.getMovedBreakingBlock(getBreakedBlock());
    };

    /**
     * Нужно ли переместить карту
     * @param {*} y number
     * @returns object
     */
    const checkToMoving = (y) => {
        if (!block.isBlockOnMapSide(y)) return;

        dispatch(increaseDepth());

        checkToLevelChange();

        const mapCopy = moving.getMovedMap(mapState, data.getMergedData(), levelState.name);

        dispatch(setMap(mapCopy));
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

        if (skillsState.isLucky) formattedMaterial.count *= 4;

        setMaterialAddedAnimation(formattedMaterial);

        dispatch(addMaterial(formattedMaterial));
    };

    /**
     * Передача материалов от сундука
     * @param materials array
     */
    const checkToChestMaterialGive = (materials) => {
        if (!block.isBlockChest(materials)) return;

        if (skillsState.isLucky) {
            for (const material of materials) {
                material.count *= 4;
            }
        }

        setMaterialsFromChestAnimation(materials);

        dispatch(addMaterials(materials));
    };

    const check3x3Blocks = (x, y) => {
        if (x == 0 && y == 0) return 'top_left';
        if (x == 9 && y == 0) return 'top_right';
        if (x == 0 && y == 8) return 'bottom_left';
        if (x == 9 && y == 8) return 'bottom_right';
        if (x > 0 && x < 9 && y == 0) return 'top';
        if (x > 0 && x < 9 && (y == 8 || y == 7)) return 'bottom';
        if (y > 0 && y < 8 && x == 9) return 'right';
        if (y > 0 && y < 8 && x == 0) return 'left';
        if (y > 0 && y < 7 && x > 0 && x < 9) return 'center';
    };

    const get3x3BreakRange = (position, x, y) => {
        const breakRange = {
            center: { x: [x - 1, x + 1], y: [y - 1, y + 1] },
            left: { x: [x, x + 1], y: [y - 1, y + 1] },
            right: { x: [x - 1, x], y: [y - 1, y + 1] },
            top: { x: [x - 1, x + 1], y: [y, y + 1] },
            top_left: { x: [x, x + 1], y: [y, y + 1] },
            top_right: { x: [x - 1, x], y: [y, y + 1] },
            bottom: { x: [x - 1, x + 1], y: [y - 1, y + 1] },
            bottom_right: { x: [x - 1, x], y: [y - 1, y + 1] },
            bottom_left: { x: [x, x + 1], y: [y - 1, y + 1] }
        };

        return breakRange[position];
    };

    const getBreakedBlocksFromRange = (range) => {
        const breakedBlocks = [];

        for (let y = range.y[0]; y <= range.y[1]; y++) {
            for (let x = range.x[0]; x <= range.x[1]; x++) {
                breakedBlocks.push({ x: x, y: y, breaked: true });
            }
        }

        return breakedBlocks;
    };

    const checkToMoving3x3 = (position) => {
        if (!block.is3x3OnMapSide(position)) return;

        dispatch(increaseDepth());

        checkToLevelChange();

        const mapCopy = moving.getMovedMap(mapState, data.getMergedData(), levelState.name);

        dispatch(setMap(mapCopy));
    };

    const checkBreakedBlocks = (position, x, y) => {
        if (!block.is3x3OnMapSide(position))
            return getBreakedBlocksFromRange(get3x3BreakRange(position, x, y));

        return moving.getMovedBreakingBlocks(
            getBreakedBlocksFromRange(get3x3BreakRange(position, x, y))
        );
    };

    const break3x3Blocks = () => {
        const { x, y } = blockInfo;
        const breakingPosition = check3x3Blocks(x, y);
        const breakingRange = get3x3BreakRange(breakingPosition, x, y);

        const breakedBlocks = getBreakedBlocksFromRange(get3x3BreakRange(breakingPosition, x, y));

        const changedBlocks = map.getUpdatedBlocksWithBreakedBlocks(
            mapState,
            breakedBlocks,
            breakingRange
        );

        dispatch(setBlocksFromArray(changedBlocks));
    };

    /**
     * Ломает блок
     */
    const breakBlock = () => {
        const { material, material_count, materials, breaked, y } = blockInfo;

        const breakedBlock = checkBreakedBlock(y);

        const changedBlocks = map.getUpdatedBlocksWithBreakedBlock(mapState, breakedBlock);

        checkToMoving(y);

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

        // break3x3Blocks();

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
