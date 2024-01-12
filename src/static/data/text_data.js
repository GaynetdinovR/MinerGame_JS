const text_data = {
    materials: [
        {
            name: 'copper_ore',
            text_name: 'Медь'
        },
        {
            name: 'coal',
            text_name: 'Уголь'
        },
        {
            name: 'iron_ore',
            text_name: 'Железо'
        },
        {
            name: 'magnetite_ore',
            text_name: 'Магнетит'
        },
        {
            name: 'sulfur',
            text_name: 'Сера'
        },
        {
            name: 'titan_ore',
            text_name: 'Титан'
        },
        {
            name: 'silver',
            text_name: 'Серебро'
        },
        {
            name: 'chromatite_ore',
            text_name: 'Хроматит'
        },
        {
            name: 'electronyte',
            text_name: 'Электронит'
        },
        {
            name: 'mithril_ore',
            text_name: 'Мифрил'
        },
        {
            name: 'neutronium_ore',
            text_name: 'Нейтрониум'
        }
    ],
    blocks: [
        {
            name: 'stone',
            text_name: 'Камень'
        },
        {
            name: 'copper_block',
            text_name: 'Медь',
            material_name: 'меди'
        },
        {
            name: 'coal_block',
            text_name: 'Уголь',
            material_name: 'угля'
        },
        {
            name: 'iron_block',
            text_name: 'Железо',
            material_name: 'железа'
        },
        {
            name: 'cave_1_chest',
            text_name: 'Сундук'
        },
        {
            name: 'magnetite_block',
            text_name: 'Магнетит',
            material_name: 'магнетита'
        },
        {
            name: 'sulfur_block',
            text_name: 'Сера',
            material_name: 'серы'
        },
        {
            name: 'cave_2_chest',
            text_name: 'Сундук'
        },
        {
            name: 'dark_stone',
            text_name: 'Темный камень'
        },
        {
            name: 'titan_block',
            text_name: 'Титан',
            material_name: 'титан'
        },
        {
            name: 'silver_block',
            text_name: 'Серебро',
            material_name: 'серебра'
        },
        {
            name: 'cave_3_chest',
            text_name: 'Сундук'
        },
        {
            name: 'magma_stone',
            text_name: 'Магмовый камень'
        },
        {
            name: 'chromatite_block',
            text_name: 'Хроматит',
            material_name: 'хроматита'
        },
        {
            name: 'electronyte_block',
            text_name: 'Электронит',
            material_name: 'электронита'
        },
        {
            name: 'cave_4_chest',
            text_name: 'Сундук'
        },
        {
            name: 'mithril_block',
            text_name: 'Мифрил',
            material_name: 'мифрила'
        },
        {
            name: 'neutronium_block',
            text_name: 'Нейтрониум',
            material_name: 'нейтрониума'
        },
        {
            name: 'cave_5_chest',
            text_name: 'Сундук'
        }
    ],
    levels: [
        {
            name: 'cave_1',
            text_name: 'Глубины'
        },
        {
            name: 'cave_2',
            text_name: 'Черные Глубины'
        },
        {
            name: 'cave_3',
            text_name: 'Темные пещеры'
        },
        {
            name: 'cave_4',
            text_name: 'Магмовые пещеры'
        },
        {
            name: 'cave_5',
            text_name: 'Лавовые просторы'
        }
    ],
    tools: [
        {
            name: 'wood_pickaxe',
            text_name: 'Деревянная кирка'
        },
        {
            name: 'copper_pickaxe',
            text_name: 'Медная кирка',
            craft_text: '150 меди'
        },
        {
            name: 'iron_pickaxe',
            text_name: 'Железная кирка',
            craft_text: '200 железа'
        },
        {
            name: 'magnetite_pickaxe',
            text_name: 'Магнетитовая кирка',
            craft_text: '200 магнетита',
            possibilities_text: 'Руды вокруг вас выделяются'
        },
        {
            name: 'titan_pickaxe',
            text_name: 'Титановая кирка',
            craft_text: '250 титана',
            possibilities_text: 'Раз в пять ударов наносит двойной удар'
        },
        {
            name: 'silver_pot',
            text_name: 'Серебрянный горшок монет',
            craft_text: '150 серебра и 200 монет',
            possibilities_text: 'Необходим для крафта скилла'
        },
        {
            name: 'chromatite_pickaxe',
            text_name: 'Хроматитовая кирка',
            craft_text: '200 хроматита',
            possibilities_text: 'Наносит отравление, которое наносит 80 урона раз в 2 секунды'
        },
        {
            name: 'electronyte_lantern',
            text_name: 'Электронитовый фонарь',
            craft_text: '250 электронита и 150 магнетита',
            possibilities_text: 'Улучшает видимость блоков на +2'
        },
        {
            name: 'mithril_pickaxe',
            text_name: 'Мифриловая кирка',
            craft_text: '300 мифрила'
        },
        {
            name: 'neutronium_pickaxe',
            text_name: 'Нейтронная кирка',
            craft_text: '200 нейтрониума',
            possibilities_text: 'С шансом 10% при ломании блока вызывает взрыв 2х2'
        }
    ],
    skills: [
        {
            name: 'more_efforts',
            text_name: 'Больше усилий!',
            description: 'Увеличивает вашу выносливость в 2 раза',
            craft_text: '50 угля и 100 монет',
            buff_text: 'x2 урон на 30 секунд'
        },
        {
            name: 'dynamite',
            text_name: 'Динамит!',
            description: 'Взрывает динамит на выбранной вами точке',
            craft_text: '80 серы, 100 угля и 50 монет',
            buff_text: 'взрыв 3х3'
        },
        {
            name: 'lucky',
            text_name: 'Удача!',
            description: 'Увеличивает количество добываемого материала  в 4 раза',
            craft_text: 'Серебрянный горшок',
            buff_text: 'x4 добыча на 15 секунд'
        },
        {
            name: 'magnet_explosion',
            text_name: 'Магнитный взрыв!',
            description: 'Собирает руды вокруг вас',
            craft_text: '100 магнетита, 80 серебра и 150 монет',
            buff_text: 'взрыв 4х4, собирающий только руды'
        },
        {
            name: 'drill',
            text_name: 'Бур!',
            description: 'Копает и собирает ресурсы одной вертикальной полосой',
            craft_text: '80 нейтрониума и 150 мифрила',
            buff_text: 'копает полосу в выбранном месте 2x10'
        }
    ]
};

export default text_data;
