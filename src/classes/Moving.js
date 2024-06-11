import generation from './Generation.js';
import data from './Data.js';

class Moving {
    /**
     * Возвращает смещенный сломанный блок
     * @param {*} breakedBlock {x, y, breaked}
     * @returns object
     */
    getMovedBreakingBlock = (breakedBlock) => {
        return { ...breakedBlock, y: breakedBlock.y - 1 };
    };

    getMovedBreakingBlocks = (breakedBlocks) => {
        const res = [];

        for (const breakedBlock of breakedBlocks) {
            res.push(this.getMovedBreakingBlock(breakedBlock));
        }

        return res;
    };

    /**
     * Возвращает, перемещенную на один блок, карту
     * @param {*} map [[]]
     * @param {*} megredData {[]}
     * @param {*} levelName string
     * @returns [[]]
     */
    getMovedMap = (mapState, megredData, levelName) => {
        const mapCopy = [];

        for (let newY = 1; newY < 10; newY++) {
            const row = mapState[newY].map((block) => {
                const durability = data.find(megredData.blocks, block.name).durability;

                return { ...block, y: newY - 1, durability_changed: durability };
            });

            mapCopy.push(row);
        }

        mapCopy.push(generation.generateRow(megredData, levelName, 9));

        return mapCopy;
    };
}

const moving = new Moving();

export default moving;
