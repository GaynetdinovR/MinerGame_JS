const game_data = {
    materials: [
        {
            name: 'copper_ore',
            price_to_10: 2
        },
        {
            name: 'coal',
            price_to_10: 2
        },
        {
            name: 'iron_ore',
            price_to_10: 3
        },
        {
            name: 'magnetite_ore',
            price_to_10: 4
        },
        {
            name: 'sulfur',
            price_to_10: 14
        },
        {
            name: 'titan_ore',
            price_to_10: 6
        },
        {
            name: 'silver',
            price_to_10: 21
        },
        {
            name: 'chromatite_ore',
            price_to_10: 4
        },
        {
            name: 'electronyte',
            price_to_10: 12
        },
        {
            name: 'mithril_ore',
            price_to_10: 5
        },
        {
            name: 'neutronium_ore',
            price_to_10: 10
        }
    ],
    blocks: [
        {
            name: 'stone_1',
            chance: 1,
            durability: 30
        },
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
            durability: 170,
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
            name: 'stone_2',
            chance: 1,
            durability: 30
        },
        {
            name: 'magnetite_block',
            chance: 0.14,
            durability: 250,
            material: 'magnetite_ore',
            material_count: [3, 7]
        },
        {
            name: 'sulfur_block',
            chance: 0.06,
            durability: 310,
            material: 'sulfur',
            material_count: [1, 5]
        },
        {
            name: 'cave_2_chest',
            durability: 600,
            chance: 0.005,
            materials: [
                { name: 'magnetite_ore', chance: 1, count: [10, 30] },
                { name: 'sulfur', chance: 0.6, count: [5, 20] },
                { name: 'coins', chance: 1.5, count: [75, 250] }
            ]
        },
        {
            name: 'dark_stone',
            chance: 1,
            durability: 250
        },
        {
            name: 'titan_block',
            chance: 0.14,
            durability: 600,
            material: 'titan_ore',
            material_count: [3, 7]
        },
        {
            name: 'silver_block',
            chance: 0.06,
            durability: 750,
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
            name: 'magma_stone_1',
            chance: 1,
            durability: 400
        },
        {
            name: 'chromatite_block',
            chance: 0.12,
            durability: 1200,
            material: 'chromatite_ore',
            material_count: [3, 7]
        },
        {
            name: 'electronyte_block',
            chance: 0.05,
            durability: 1500,
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
            name: 'magma_stone_2',
            chance: 1,
            durability: 400
        },
        {
            name: 'mithril_block',
            chance: 0.12,
            durability: 2000,
            material: 'mithril_ore',
            material_count: [3, 7]
        },
        {
            name: 'neutronium_block',
            chance: 0.08,
            durability: 2300,
            material: 'neutronium_ore',
            material_count: [3, 7]
        },
        {
            name: 'cave_5_chest',
            durability: 6500,
            chance: 0.005,
            materials: [
                { name: 'mithril_ore', chance: 1, count: [15, 40] },
                { name: 'neutronium_ore', chance: 0.7, count: [10, 30] },
                { name: 'coins', chance: 1.5, count: [150, 500] }
            ]
        }
    ],
    levels: [
        {
            name: 'cave_1',
            depth: [0, 499],
            new_materials: ['iron_ore', 'copper_ore', 'coal'],
            new_skills: ['more_efforts'],
            new_tools: ['copper_pickaxe', 'iron_pickaxe'],
            blocks: ['coal_block', 'copper_block', 'iron_block', 'cave_1_chest'],
            basement: 'stone_1'
        },
        {
            name: 'cave_2',
            depth: [500, 899],
            new_materials: ['magnetite_ore', 'sulfur'],
            new_skills: ['dynamite'],
            new_tools: ['magnetite_pickaxe'],
            blocks: ['magnetite_block', 'sulfur_block', 'cave_2_chest'],
            basement: 'stone_2'
        },
        {
            name: 'cave_3',
            depth: [900, 1299],
            new_materials: ['titan_ore', 'silver'],
            new_skills: ['magnet_explosion'],
            new_tools: ['titan_pickaxe', 'silver_pot'],
            blocks: ['titan_block', 'silver_block', 'cave_3_chest'],
            basement: 'dark_stone'
        },
        {
            name: 'cave_4',
            depth: [1300, 1999],
            new_materials: ['chromatite_ore', 'electronyte'],
            new_skills: ['lucky'],
            new_tools: ['chromatite_pickaxe', 'electronyte_lantern'],
            blocks: ['chromatite_block', 'electronyte_block', 'cave_4_chest'],
            basement: 'magma_stone_1'
        },
        {
            name: 'cave_5',
            depth: [2000, 2500],
            new_materials: ['mithril_ore', 'neutronium_ore'],
            new_skills: ['drill'],
            new_tools: ['mithril_pickaxe', 'neutronium_pickaxe'],
            blocks: ['mithril_block', 'neutronium_block', 'cave_5_chest'],
            basement: 'magma_stone_2'
        }
    ],
    tools: [
        {
            name: 'wood_pickaxe',
            damage: 20
        },
        {
            name: 'copper_pickaxe',
            damage: 35,
            craft_count: { copper_ore: 500 }
        },
        {
            name: 'iron_pickaxe',
            damage: 45,
            craft_count: { iron_ore: 350 }
        },
        {
            name: 'magnetite_pickaxe',
            damage: 60,
            craft_count: { magnetite_ore: 600 }
        },
        {
            name: 'titan_pickaxe',
            damage: 150,
            craft_count: { titan_ore: 600 }
        },
        {
            name: 'silver_pot',
            craft_count: { silver: 110, coins: 350 }
        },
        {
            name: 'chromatite_pickaxe',
            damage: 300,
            craft_count: { chromatite_ore: 900 }
        },
        {
            name: 'electronyte_lantern',
            craft_count: { electronyte: 250, magnetite_ore: 100 }
        },
        {
            name: 'mithril_pickaxe',
            damage: 1000,
            craft_count: { mithril_ore: 400 }
        },
        {
            name: 'neutronium_pickaxe',
            damage: 800,
            craft_count: { neutronium_ore: 300 }
        }
    ],
    skills: [
        {
            name: 'more_efforts',
            craft_count: { coal: 300, coins: 500 },
            buff: 'pass',
            cooldown: 100
        },
        {
            name: 'dynamite',
            craft_count: { sulfur: 120, coal: 150, coins: 700 },
            buff: 'pass',
            cooldown: 150
        },
        {
            name: 'magnet_explosion',
            craft_count: { magnetite_ore: 300, silver: 100, coins: 750 },
            buff: 'pass',
            cooldown: 300
        },
        {
            name: 'lucky',
            craft_count: { silver_pot: 1 },
            buff: 'pass',
            cooldown: 150
        },
        {
            name: 'drill',
            craft_count: { neutronium_ore: 300, mithril_ore: 400 },
            buff: 'pass',
            cooldown: 300
        }
    ]
};

export default game_data;
