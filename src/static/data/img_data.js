import {
    iron_block,
    coal_block,
    chromatite_block,
    copper_block,
    electronyte_block,
    magnetite_block,
    mithril_block,
    neutronium_block,
    silver_block,
    sulfur_block,
    titan_block, 
    cave_1_block,
    cave_2_block,
    cave_3_block,
    cave_4_block,
    cave_5_block,
    cave_1_bg,
    cave_2_bg,
    cave_3_bg,
    cave_4_bg,
    cave_5_bg
} from '../../assets/content/group.js';

import {
    coal,
    silver,
    electronyte,
    sulfur,
    mithril_ore,
    chromatite_ore,
    copper_ore,
    iron_ore,
    magnetite_ore,
    neutronium_ore,
    titan_ore,
    chromatite_pickaxe,
    copper_pickaxe,
    electronyte_lantern,
    iron_pickaxe,
    magnetite_pickaxe,
    mithril_pickaxe,
    titan_pickaxe,
    wood_pickaxe,
    neutronium_pickaxe,
    coins,
    silver_pot,
    muscle,
    dynamite,
    clover,
    magnet,
    drill,
} from '../../assets/icons/group.js';

const img_data = {
    'materials': [
        {
            name: 'coins',
            img: coins
        },
        {
            name: 'coal',
            img: coal
        },
        {
            name: 'iron_ore',
            img: iron_ore
        },
        {
            name: 'copper_ore',
            img: copper_ore
        },
        {
            name: 'magnetite_ore',
            img: magnetite_ore
        },
        {
            name: 'sulfur',
            img: sulfur
        },
        {
            name: 'titan_ore',
            img: titan_ore
        },
        {
            name: 'silver',
            img: silver
        },
        {
            name: 'chromatite_ore',
            img: chromatite_ore
        },
        {
            name: 'electronyte',
            img: electronyte
        },
        {
            name: 'mithril_ore',
            img: mithril_ore
        },
        {
            name: 'neutronium_ore',
            img: neutronium_ore
        }
    ],
    'blocks': [
        {
            'name': 'stone',
            'img': [cave_1_block, cave_2_block],
        },
        {
            'name': 'copper_block',
            'img': [copper_block],
        },
        {
            'name': 'coal_block',
            'img': [coal_block],
        },
        {
            'name': 'iron_block',
            'img': [iron_block],
        },
        {
            'name': 'magnetite_block',
            'img': [magnetite_block],
        },
        {
            'name': 'sulfur_block',
            'img': [sulfur_block],
        },
        {
            'name': 'dark_stone',
            'img': [cave_3_block]
        },
        {
            'name': 'titan_block',
            'img': [titan_block],
        },
        {
            'name': 'silver_block',
            'img': [silver_block],
        },
        {
            'name': 'magma_stone',
            'img': [cave_4_block, cave_5_block]
        },
        {
            'name': 'chromatite_block',
            'img': [chromatite_block],
        },
        {
            'name': 'electronyte_block',
            'img': [electronyte_block],
        },
        {
            'name': 'mithril_block',
            'img': [mithril_block],
        },
        {
            'name': 'neutronium_block',
            'img': [neutronium_block],
        }
    ],
    'levels': [
        {
            'name': 'cave_1',
            'img': cave_1_bg
        },
        {
            'name': 'cave_2',
            'img': cave_2_bg
        },
        {
            'name': 'cave_3',
            'img': cave_3_bg
        },
        {
            'name': 'cave_4',
            'img': cave_4_bg
        },
        {
            'name': 'cave_5',
            'img': cave_5_bg
        },
    ],
    'tools': [
        {
            'name': 'wood_pickaxe',
            'img': wood_pickaxe,
        },
        {
            'name': 'copper_pickaxe',
            'img': copper_pickaxe,
        },
        {
            'name': 'iron_pickaxe',
            'img': iron_pickaxe,
        },
        {
            'name': 'magnetite_pickaxe',
            'img': magnetite_pickaxe,
        },
        {
            'name': 'titan_pickaxe',
            'img': titan_pickaxe,
        },
        {
            'name': 'silver_pot',
            'img': silver_pot,
        },
        {
            'name': 'chromatite_pickaxe',
            'img': chromatite_pickaxe,
        },
        {
            'name': 'electronyte_lantern',
            'img': electronyte_lantern,
        },
        {
            'name': 'mithril_pickaxe',
            'img': mithril_pickaxe,
        },
        {
            'name': 'neutronium_pickaxe',
            'img': neutronium_pickaxe,
        }
    ],
    'skills': [
        {
            'name': 'more_efforts',
            'img': muscle,
        },
        {
            'name': 'dynamite',
            'img': dynamite,
        },
        {
            'name': 'lucky',
            'img': clover,
        },
        {
            'name': 'magnet_explosion',
            'img': magnet,
        },
        {
            'name': 'drill',
            'img': drill,
        },
    ]
}

export default img_data