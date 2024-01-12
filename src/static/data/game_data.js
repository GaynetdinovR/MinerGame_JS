const game_data = {
    materials: [
        {
            name: 'copper_ore',
            price_to_10: 2
        },
        {
            name: 'coal',
            price_to_10: 1
        },
        {
            name: 'iron_ore',
            price_to_10: 3
        },
        {
            name: 'magnetite_ore',
            price_to_10: 5
        },
        {
            name: 'sulfur',
            price_to_10: 8
        },
        {
            name: 'titan_ore',
            price_to_10: 10
        },
        {
            name: 'silver',
            price_to_10: 15
        },
        {
            name: 'chromatite_ore',
            price_to_10: 15
        },
        {
            name: 'electronyte',
            price_to_10: 20
        },
        {
            name: 'mithril_ore',
            price_to_10: 18
        },
        {
            name: 'neutronium_ore',
            price_to_10: 35
        }
    ],
    blocks: [
        {
            name: 'stone',
            durability: 30
        },
        {
            name: 'copper_block',
            durability: 150,
            material: 'copper_ore',
            material_count: [3, 7]
        },
        {
            name: 'coal_block',
            durability: 120,
            material: 'coal',
            material_count: [1, 5]
        },
        {
            name: 'iron_block',
            durability: 500,
            material: 'iron_ore',
            material_count: [3, 7]
        },
        {
            name: 'magnetite_block',
            durability: 900,
            material: 'magnetite_ore',
            material_count: [3, 7]
        },
        {
            name: 'sulfur_block',
            durability: 800,
            material: 'sulfur',
            material_count: [1, 5]
        },
        {
            name: 'dark_stone',
            durability: 300
        },
        {
            name: 'titan_block',
            durability: 1500,
            material: 'titan_ore',
            material_count: [3, 7]
        },
        {
            name: 'silver_block',
            durability: 2500,
            material: 'silver',
            material_count: [1, 5]
        },
        {
            name: 'magma_stone',
            durability: 500
        },
        {
            name: 'chromatite_block',
            durability: 4000,
            material: 'chromatite_ore',
            material_count: [3, 7]
        },
        {
            name: 'electronyte_block',
            durability: 6000,
            material: 'electronyte',
            material_count: [1, 5]
        },
        {
            name: 'mithril_block',
            durability: 7500,
            material: 'mithril_ore',
            material_count: [3, 7]
        },
        {
            name: 'neutronium_block',
            durability: 20000,
            material: 'neutronium_ore',
            material_count: [3, 7]
        }
    ],
    levels: [
        {
            name: 'cave_1',
            depth: [0, 199],
            new_materials: ['iron_ore', 'copper_ore', 'coal'],
            new_skills: ['more_efforts'],
            new_tools: ['copper_pickaxe', 'iron_pickaxe'],
            basement: 'stone'
        },
        {
            name: 'cave_2',
            depth: [200, 599],
            new_materials: ['magnetite_ore', 'sulfur'],
            new_skills: ['dynamite'],
            new_tools: ['magnetite_pickaxe'],
            basement: 'stone'
        },
        {
            name: 'cave_3',
            depth: [600, 999],
            new_materials: ['titan_ore', 'silver'],
            new_skills: ['magnet_explosion'],
            new_tools: ['titan_pickaxe', 'silver_pot'],
            basement: 'dark_stone'
        },
        {
            name: 'cave_4',
            depth: [1000, 1799],
            new_materials: ['chromatite_ore', 'electronyte'],
            new_skills: ['lucky'],
            new_tools: ['chromatite_pickaxe', 'electronyte_lantern'],
            basement: 'magma_stone'
        },
        {
            name: 'cave_5',
            depth: [1800, 2999],
            new_materials: ['mithril_ore', 'neutronium_ore'],
            new_skills: ['drill'],
            new_tools: ['mithril_pickaxe', 'neutronium_pickaxe'],
            basement: 'magma_stone'
        }
    ],
    tools: [
        {
            name: 'wood_pickaxe',
            damage: 10
        },
        {
            name: 'copper_pickaxe',
            damage: 25,
            craft_count: { copper_ore: 150 }
        },
        {
            name: 'iron_pickaxe',
            damage: 45,
            craft_count: { iron_ore: 200 }
        },
        {
            name: 'magnetite_pickaxe',
            damage: 60,
            craft_count: { magnetite_ore: 200 }
        },
        {
            name: 'titan_pickaxe',
            damage: 150,
            craft_count: { titan_ore: 250 }
        },
        {
            name: 'silver_pot',
            craft_count: { silver: 150, coins: 200 }
        },
        {
            name: 'chromatite_pickaxe',
            damage: 300,
            craft_count: { chromatite_ore: 200 }
        },
        {
            name: 'electronyte_lantern',
            craft_count: { electronyte: 250, magnetite_ore: 150 }
        },
        {
            name: 'mithril_pickaxe',
            damage: 1000,
            craft_count: { mithril_ore: 300 }
        },
        {
            name: 'neutronium_pickaxe',
            damage: 800,
            craft_count: { neutronium_ore: 200 }
        }
    ],
    skills: [
        {
            name: 'more_efforts',
            craft_count: { coal: 50, coins: 100 },
            buff: 'pass',
            cooldown: 100,
            price: 150
        },
        {
            name: 'dynamite',
            craft_count: { sulfur: 80, coal: 100, coins: 50 },
            buff: 'pass',
            cooldown: 150,
            price: 250
        },
        {
            name: 'magnet_explosion',
            craft_count: { magnetite_ore: 100, silver: 100, coins: 150 },
            buff: 'pass',
            cooldown: 300,
            price: 400
        },
        {
            name: 'lucky',
            craft_count: { silver_pot: 1 },
            buff: 'pass',
            cooldown: 150,
            price: 600
        },
        {
            name: 'drill',
            craft_count: { neutronium_ore: 80, mithril_ore: 150 },
            buff: 'pass',
            cooldown: 300,
            price: 750
        }
    ]
};

export default game_data;
