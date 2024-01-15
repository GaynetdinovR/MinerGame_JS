import map from './Map.js';

class Light {
    /**
     * Возвращает освещение блока
     * @param {*} blocks [[]]
     * @param {*} block {x, y}
     * @returns number (0, 1, 2)
     */
    getLigth = (blocks, { x, y }) => {
        return map.getBlock(blocks, x, y).light;
    };

    /**
     * Проверяет нужно ли менять освещение блока
     * @param {*} blocks [[]]
     * @param {*} mapCopy []
     * @param {*} newBlock {x, y, light, breaked}
     */
    checkLight = (blocks, mapCopy, newBlock) => {
        const light = this.getLigth(blocks, newBlock);

        if (light != 2) mapCopy.push(newBlock);
    };

    /**
     * Возвращает карту, освещенную согласно сломанному блоку
     * @param {*} blocks [[]]
     * @param {*} breakedBlock {x, y, breaked}
     * @returns [[]]
     */
    getUpdatedMapLight = (blocks, breakedBlock) => {
        const mapCopy = [];

        mapCopy.push(breakedBlock);

        for (const block of blocks.flat()) {
            const { x, y } = block;

            if (!(breakedBlock.x == x && breakedBlock.y == y)) continue;

            if (y > 0) mapCopy.push({ x: x, y: y - 1, light: 2 });
            if (y < 9) mapCopy.push({ x: x, y: y + 1, light: 2 });
            if (x > 0) mapCopy.push({ x: x - 1, y: y, light: 2 });
            if (x < 9) mapCopy.push({ x: x + 1, y: y, light: 2 });

            if (y > 1) this.checkLight(blocks, mapCopy, { y: y - 2, x: x, light: 1 });
            if (y < 8) this.checkLight(blocks, mapCopy, { y: y + 2, x: x, light: 1 });
            if (x > 1) this.checkLight(blocks, mapCopy, { y: y, x: x - 2, light: 1 });
            if (x < 8) this.checkLight(blocks, mapCopy, { y: y, x: x + 2, light: 1 });

            if (y > 0 && x > 0) this.checkLight(blocks, mapCopy, { x: x - 1, y: y - 1, light: 1 });
            if (y < 9 && x < 9) this.checkLight(blocks, mapCopy, { x: x + 1, y: y + 1, light: 1 });
            if (y > 0 && x < 9) this.checkLight(blocks, mapCopy, { x: x + 1, y: y - 1, light: 1 });
            if (y < 9 && x > 0) this.checkLight(blocks, mapCopy, { x: x - 1, y: y + 1, light: 1 });
        }

        return mapCopy;
    };
}

const light = new Light();

export default light;
