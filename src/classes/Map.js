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

    /**
     * Возвращает изображение блока
     * @param {*} imgs array
     * @param {*} level string
     * @returns object
     */
    findBlockImg = (imgs, level) => {
        const levels = {
            cave_1: 0,
            cave_2: 1,
            cave_3: 0,
            cave_4: 0,
            cave_5: 1
        };

        return imgs.length == 1 ? imgs[0] : imgs[levels[level]];
    };
}

const map = new Map();

export default map;
