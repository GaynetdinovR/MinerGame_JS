import other from './Other.js';
import data from './Data.js';

class Generation {
    /**
     * Начальная генерация карты на 100 блоков
     * @param {*} megredData object
     * @param {*} level object
     * @returns array
     */
    generateMap = (megredData, level) => {
        const blockTypes = this.formatBlockTypes(megredData, level);

        const map = [];

        for (let i = 0; i < 100; i++) {
            map.push(other.drop(blockTypes));
        }

        return map;
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
