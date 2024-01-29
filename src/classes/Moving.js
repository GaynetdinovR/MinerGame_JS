import generation from './Generation.js';
import data from './Data.js';

class Moving {
    /**
     * Возвращает, перемещенную на один блок, карту
     * @param {*} map [[]]
     * @param {*} megredData {[]}
     * @param {*} levelName string
     * @returns [[]]
     */
    getMovedMap = (map, megredData, levelName) => {
        const mapCopy = [];

        for (let newY = 1; newY < 10; newY++) {
            const row = map[newY].map((block) => {
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
