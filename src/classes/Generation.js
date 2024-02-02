import other from './Other.js';
import data from './Data.js';

class Generation {
    /**
     * Начальная генерация карты на 100 блоков
     * @param {*} megredData object
     * @returns array
     */
    generateMap = (megredData) => {
        const map = [];

        for (let y = 0; y < 10; y++) {
            const isFirstRow = y == 0;

            map.push(this.generateRow(megredData, 'cave_1', y, isFirstRow));
        }

        return map;
    };

    /**
     * Функция генерации строки блоков
     * @param {*} megredData object
     * @param {*} levelName string
     * @param {*} y number
     * @param {*} isFirstRow bool
     * @returns array
     */
    generateRow = (megredData, levelName, y, isFirstRow = false) => {
        const level = data.find(megredData.levels, levelName);
        const blockTypes = this.formatBlockTypes(megredData, level);

        const row = [];

        for (let x = 0; x < 10; x++) {
            const isFirstBlock = x == 0 && y == 0;

            const light = isFirstBlock && isFirstRow ? 2 : 0;

            const block = { x: x, y: y, light: light, breaked: false };

            const temp = { ...other.drop(blockTypes), ...block };

            temp['durability_changed'] = data.find(
                data.getMergedData().blocks,
                temp.name
            ).durability;

            row.push(temp);
        }

        return row;
    };

    /**
     * Форматирует блоки материалов
     * @param {*} blocks array
     * @param {*} level object
     * @returns object
     */
    formatMaterialBlocks = (blocks, level) => {
        const materialBlocks = level.blocks.map((block) => {
            const temp = data.find(blocks, block);

            return { name: temp.name, chance: temp.chance };
        });

        return materialBlocks;
    };

    /**
     * Форматирует блок основания
     * @param {*} blocks array
     * @param {*} level object
     * @returns object
     */
    formatBasementBlock = (blocks, level) => {
        const temp = data.find(blocks, level.basement);

        return {
            name: temp.name,
            chance: temp.chance
        };
    };

    /**
     * Форматирует типы генерируемых блоков
     * @param {*} megredData object
     * @param {*} level object
     * @returns array
     */
    formatBlockTypes = (megredData, level) => {
        const { levels, blocks } = megredData;

        const result = [];
        const levelInfo = data.find(levels, level.name);

        const materialBlocks = this.formatMaterialBlocks(blocks, levelInfo);
        const basementBlock = this.formatBasementBlock(blocks, levelInfo);

        result.push(basementBlock);
        result.push(...materialBlocks);

        return result;
    };
}

const generation = new Generation();

export default generation;
