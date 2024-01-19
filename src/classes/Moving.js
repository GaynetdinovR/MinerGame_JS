import generation from './Generation.js';
import data from './Data.js';

class Moving {
    getMovedToOneMap = (blocks) => {
        const mapCopy = [];

        for (let i = 2; i < 11; i++) {
            const newY = i - 1;

            const row = blocks[newY].map((block) => {
                return { ...block, y: newY - 1 };
            });

            mapCopy.push(row);
        }

        return mapCopy;
    };

    getMovedMap = (blocks, megredData, levelName) => {
        const newRow = generation.generateRow(megredData, levelName, 9);
        let mapCopy = this.getMovedToOneMap(blocks);

        mapCopy.push(newRow);

        mapCopy = this.updateBlockDurabilities(mapCopy, megredData.blocks);

        return mapCopy;
    };

    updateBlockDurabilities = (mapCopy, blocks) => {
        return mapCopy.map((row) => {
            return row.map((block) => {
                const durability = data.find(blocks, block.name).durability;

                return { ...block, durability_changed: durability };
            });
        });
    };
}

const moving = new Moving();

export default moving;
