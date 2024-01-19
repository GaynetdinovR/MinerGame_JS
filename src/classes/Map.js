import data from './Data.js';

class Map {
    /**
     * Возвращает блок
     * @param {*} blocks [[]]
     * @param {*} x number
     * @param {*} y number
     * @returns object
     */
    getBlock = (blocks, x, y) => {
        return blocks.flat().filter((block) => block.x == x && block.y == y)[0];
    };

    /**
     * Возвращает информацию о блоке
     * @param name string
     * @returns object
     */
    getBlockInfo = (name) => {
        return data.find(data.getMergedData().blocks, name);
    };

    getBlockDurability = (blocks, x, y) => {
        return this.getBlock(blocks, x, y).durability_changed;
    };
}

const map = new Map();

export default map;
