const levels = [
    {
        name: 'cave_1',
        depth: [0, 500],
        new_materials: ['iron_ore', 'copper_ore', 'coal'],
        blocks: ['coal_block', 'copper_block', 'iron_block', 'cave_1_chest']
    },
    {
        name: 'cave_2',
        depth: [500, 900],
        new_materials: ['magnetite_ore', 'sulfur'],
        blocks: ['magnetite_block', 'sulfur_block', 'cave_2_chest']
    },
    {
        name: 'cave_3',
        depth: [900, 1300],
        new_materials: ['titan_ore', 'silver'],
        blocks: ['titan_block', 'silver_block', 'cave_3_chest']
    },
    {
        name: 'cave_4',
        depth: [1300, 2000],
        new_materials: ['chromatite_ore', 'electronyte'],
        blocks: ['chromatite_block', 'electronyte_block', 'cave_4_chest']
    },
    {
        name: 'cave_5',
        depth: [2000, 2500],
        new_materials: ['mithril_ore', 'neutronium_ore'],
        blocks: ['mithril_block', 'neutronium_block', 'cave_5_chest']
    }
];
const blocks = [
    {
        name: 'copper_block',
        chance: 0.06,
        durability: 150,
        material: 'copper_ore',
        material_count: [3, 7]
    },
    {
        name: 'coal_block',
        chance: 0.1,
        durability: 120,
        material: 'coal',
        material_count: [1, 5]
    },
    {
        name: 'iron_block',
        chance: 0.04,
        durability: 500,
        material: 'iron_ore',
        material_count: [3, 7]
    },
    {
        name: 'cave_1_chest',
        durability: 300,
        chance: 0.005,
        materials: [
            { name: 'iron_ore', chance: 0.3, count: [5, 20] },
            { name: 'copper_ore', chance: 0.7, count: [10, 30] },
            { name: 'coal', chance: 0.8, count: [15, 40] },
            { name: 'coins', chance: 1.5, count: [50, 200] }
        ]
    },
    {
        name: 'magnetite_block',
        chance: 0.14,
        durability: 900,
        material: 'magnetite_ore',
        material_count: [3, 7]
    },
    {
        name: 'sulfur_block',
        chance: 0.06,
        durability: 800,
        material: 'sulfur',
        material_count: [1, 5]
    },
    {
        name: 'cave_2_chest',
        durability: 300,
        chance: 0.005,
        materials: [
            { name: 'magnetite_ore', chance: 1, count: [10, 30] },
            { name: 'sulfur', chance: 0.6, count: [5, 20] },
            { name: 'coins', chance: 1.5, count: [75, 250] }
        ]
    },
    {
        name: 'titan_block',
        chance: 0.14,
        durability: 1500,
        material: 'titan_ore',
        material_count: [3, 7]
    },
    {
        name: 'silver_block',
        chance: 0.06,
        durability: 2500,
        material: 'silver',
        material_count: [1, 5]
    },
    {
        name: 'cave_3_chest',
        durability: 3000,
        chance: 0.005,
        materials: [
            { name: 'titan_ore', chance: 1, count: [10, 30] },
            { name: 'silver', chance: 0.5, count: [5, 20] },
            { name: 'coins', chance: 1.5, count: [100, 300] }
        ]
    },
    {
        name: 'chromatite_block',
        chance: 0.12,
        durability: 4000,
        material: 'chromatite_ore',
        material_count: [3, 7]
    },
    {
        name: 'electronyte_block',
        chance: 0.05,
        durability: 6000,
        material: 'electronyte',
        material_count: [1, 5]
    },
    {
        name: 'cave_4_chest',
        durability: 5000,
        chance: 0.005,
        materials: [
            { name: 'chromatite_ore', chance: 0.7, count: [15, 40] },
            { name: 'electronyte', chance: 1, count: [10, 30] },
            { name: 'coins', chance: 1.5, count: [125, 350] }
        ]
    },
    {
        name: 'mithril_block',
        chance: 0.12,
        durability: 7500,
        material: 'mithril_ore',
        material_count: [3, 7]
    },
    {
        name: 'neutronium_block',
        chance: 0.08,
        durability: 20000,
        material: 'neutronium_ore',
        material_count: [3, 7]
    },
    {
        name: 'cave_5_chest',
        durability: 5000,
        chance: 0.005,
        materials: [
            { name: 'mithril_ore', chance: 1, count: [15, 40] },
            { name: 'neutronium_ore', chance: 0.7, count: [10, 30] },
            { name: 'coins', chance: 1.5, count: [150, 500] }
        ]
    }
];

const logMaterials = ({ material_count, material }, blockCount, color = 'grey') => {
    const [minCount, maxCount] = [material_count[0] * blockCount, material_count[1] * blockCount];

    const avgCount = (minCount + maxCount) / 2;

    const minCountSeventy = material_count[0] * 0.3 * blockCount;

    const seventyPercent = Math.round(minCountSeventy);

    const countText = `min:${minCount}, avg:${avgCount}, max:${maxCount}, min70%:${seventyPercent}`;

    console.log(`%c${material} count: [${countText}]`, `color: ${color}`);

    return seventyPercent;
};

const getPrice = (min70) => {
    return Math.ceil(((10210 / min70) * 1.4) / 10);
};

const logInfo = (blocks, levels) => {
    const summary = {
        coins: 0
    };

    for (const level of levels) {
        const blocksCount = (level.depth[1] - level.depth[0]) * 10;

        console.log(`%c${level.name} information:`, 'color: red');
        console.log(`%cblocks count: ${blocksCount}`, 'color: red');

        for (const block of blocks) {
            if (!level.blocks.includes(block.name)) continue;

            const thisBlockCount = Math.round(blocksCount * block.chance);

            console.log(`%c${block.name} count: ${thisBlockCount}`, 'color: green');

            if (block.name.includes('chest')) {
                console.log('%cchest loot:', 'color: purple');

                for (const material of block.materials) {
                    const minSeventy = logMaterials(
                        { material: material.name, material_count: material.count },
                        thisBlockCount,
                        'purple'
                    );

                    summary[material.name] = summary[material.name]
                        ? summary[material.name] + minSeventy
                        : minSeventy;
                }

                continue;
            }

            const minSeventy = logMaterials(block, thisBlockCount);

            summary[block.material] = summary[block.material]
                ? summary[block.material] + minSeventy
                : minSeventy;
        }
    }

    console.log('%cmin summary loot:', 'color: turquoise');

    for (const material in summary) {
        const price_to_10 = getPrice(summary[material]);
        console.log(`%c${material} - ${summary[material]} - ${price_to_10}`, 'color: turquoise');
    }
};

logInfo(blocks, levels);
