import block from './Block.js';

class Light {
    getChangedBlocksNearby = (blocks, x, y) => {
        const changedBlocks = [];

        if (y > 0 && block.isBlockCanChanged(blocks, { y: y - 1, x: x }))
            changedBlocks.push({ x: x, y: y - 1, light: 2 });
        if (y < 9 && block.isBlockCanChanged(blocks, { y: y + 1, x: x }))
            changedBlocks.push({ x: x, y: y + 1, light: 2 });
        if (x > 0 && block.isBlockCanChanged(blocks, { y: y, x: x - 1 }))
            changedBlocks.push({ x: x - 1, y: y, light: 2 });
        if (x < 9 && block.isBlockCanChanged(blocks, { y: y, x: x + 1 }))
            changedBlocks.push({ x: x + 1, y: y, light: 2 });

        return changedBlocks;
    };

    getChangedBlocksDiagonally = (blocks, x, y) => {
        const changedBlocks = [];

        if (y > 0 && x > 0 && block.isBlockCanChanged(blocks, { y: y - 1, x: x - 1 }))
            changedBlocks.push({ x: x - 1, y: y - 1, light: 1 });
        if (y < 9 && x < 9 && block.isBlockCanChanged(blocks, { y: y + 1, x: x + 1 }))
            changedBlocks.push({ x: x + 1, y: y + 1, light: 1 });
        if (y > 0 && x < 9 && block.isBlockCanChanged(blocks, { y: y - 1, x: x + 1 }))
            changedBlocks.push({ x: x + 1, y: y - 1, light: 1 });
        if (y < 9 && x > 0 && block.isBlockCanChanged(blocks, { y: y + 1, x: x - 1 }))
            changedBlocks.push({ x: x - 1, y: y + 1, light: 1 });

        return changedBlocks;
    };

    getChangedBlocksFar = (blocks, x, y) => {
        const changedBlocks = [];

        if (y > 1 && block.isBlockCanChanged(blocks, { y: y - 2, x: x }))
            changedBlocks.push({ y: y - 2, x: x, light: 1 });
        if (y < 8 && block.isBlockCanChanged(blocks, { y: y + 2, x: x }))
            changedBlocks.push({ y: y + 2, x: x, light: 1 });
        if (x > 1 && block.isBlockCanChanged(blocks, { y: y, x: x - 2 }))
            changedBlocks.push({ y: y, x: x - 2, light: 1 });
        if (x < 8 && block.isBlockCanChanged(blocks, { y: y, x: x + 2 }))
            changedBlocks.push({ y: y, x: x + 2, light: 1 });

        return changedBlocks;
    };

    /**
     * Возвращает массив измененных блоков, согласно сломанному блоку
     * @param {*} blocks [[]]
     * @param {*} breakedBlock {x, y, breaked}
     * @returns []
     */
    getUpdatedBlocksByBreakedBlock = (blocks, breakedBlock) => {
        const changedBlocks = [];

        const { x, y } = breakedBlock;

        if (!block.isBlockNextToAnotherBlock(blocks, x, y)) return [];

        changedBlocks.push(...this.getChangedBlocksNearby(blocks, x, y));
        changedBlocks.push(...this.getChangedBlocksFar(blocks, x, y));
        changedBlocks.push(...this.getChangedBlocksDiagonally(blocks, x, y));

        return changedBlocks;
    };

    getUpdatedBlocksByBreakedBlocks = (blocks, breakedBlocks, range) => {
        const changedBlocks = [];

        for (const breakedBlock of breakedBlocks) {
            const { x, y } = breakedBlock;

            if (
                !block.isBlockNextToAnotherBlock(blocks, x, y) &&
                block.isBlockOnBreakedBlocksSide(range, x, y)
            )
                continue;

            changedBlocks.push(...this.getChangedBlocksNearby(blocks, x, y));
            changedBlocks.push(...this.getChangedBlocksFar(blocks, x, y));
            changedBlocks.push(...this.getChangedBlocksDiagonally(blocks, x, y));
        }

        return this.getPriorityLightBlocks(changedBlocks);
    };

    getPriorityLightBlocks = (changedBlocks) => {
        const seen = {};
        const res = [];

        for (const changedBlock of changedBlocks) {
            const key = `${changedBlock.x}, ${changedBlock.y}`;

            if (seen[key]) seen[key].push(changedBlock);

            if (!seen[key]) seen[key] = [changedBlock];
        }

        for (const key in seen) {
            res.push(seen[key].sort((a, b) => b.light - a.light)[0]);
        }

        return res;
    };
}

const light = new Light();

export default light;

//! Bug: когда ломаешь блок у границы ([x+1, y-1], [x-1, y-1], [x+2, y] ) блокам с light:2 ставиться light:1, хотя не должен
