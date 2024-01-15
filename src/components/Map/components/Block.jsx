import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlock } from '../../../store/slices/mapSlice.js';
import light from '../../../classes/Light.js';

const Block = (block) => {
    const dispatch = useDispatch();
    const map = useSelector((state) => state.map);

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
        setBlocksFromArray(light.getUpdatedMapLight(map.blocks, getBreakedBlock()));
    };

    return (
        <button
            onClick={() => breakBlock()}
            disabled={block.light == '2' ? false : true}
            className={`map__block map__${block.name} ${findLightClass()} ${findClassBreaked()}`}>
            <img src={block.img} alt={block.name} />
        </button>
    );
};

export default Block;
