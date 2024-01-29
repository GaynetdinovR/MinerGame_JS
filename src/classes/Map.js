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
        return blocks[y][x];
    };

    /**
     * Возвращает данные блока
     * @param name string
     * @returns object
     */
    getBlockData = (name) => {
        return data.find(data.getMergedData().blocks, name);
    };

    /**
     * Возвращает измененную прочность блока
     * @param {*} blocks [[]]
     * @param {*} x number
     * @param {*} y number
     * @returns number
     */
    getBlockDurability = (blocks, x, y) => {
        return this.getBlock(blocks, x, y).durability_changed;
    };
}

const map = new Map();

export default map;
