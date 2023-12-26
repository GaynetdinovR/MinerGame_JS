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
		cave_5_block
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

const game_data = {
	'blocks': [
		{
			'name': 'stone',
			'text_name': 'Камень',
			'durability': 30,
			'img': [cave_1_block, cave_2_block],
		},
		{
			'name': 'copper_block',
			'text_name': 'Медная руда',
			'durability': 150,
			'material_count': [3, 7],
			'img': [copper_block],
			'material_img': copper_ore,
			'material_name': 'меди'
		},
		{
			'name': 'coal_block',
			'text_name': 'Уголь',
			'durability': 120,
			'material_count': [1, 5],
			'img': [coal_block],
			'material_img': coal,
			'material_name': 'угля'
		},
		{
			'name': 'iron_block',
			'text_name': 'Железная руда',
			'durability': 500,
			'material_count': [3, 7],
			'img': [iron_block],
			'material_img': iron_ore,
			'material_name': 'железа'
		},
		{
			'name': 'magnetite_block',
			'text_name': 'Магнетит',
			'durability': 900,
			'material_count': [3, 7],
			'img': [magnetite_block],
			'material_img': magnetite_ore,
			'material_name': 'магнетита'
		},
		{
			'name': 'sulfur_block',
			'text_name': 'Сера',
			'durability': 800,
			'material_count': [1, 5],
			'img': [sulfur_block],
			'material_img': sulfur,
			'material_name': 'серы'
		},
		{
			'name': 'dark_stone',
			'text_name': 'Темный камень',
			'durability': 300,
			'img': [cave_3_block]
		},
		{
			'name': 'titan_block',
			'text_name': 'Титановая руда',
			'durability': 1500,
			'material_count': [3, 7],
			'img': [titan_block],
			'material_img': titan_ore,
			'material_name': 'титан'
		},
		{
			'name': 'silver_block',
			'text_name': 'Серебрянная руда',
			'durability': 2500,
			'material_count': [1, 5],
			'img': [silver_block],
			'material_img': silver,
			'material_name': 'серебра'
		},
		{
			'name': 'magma_stone',
			'text_name': 'Магмовый камень',
			'durability': 500,
			'img': [cave_4_block, cave_5_block]
		},
		{
			'name': 'chromatite_block',
			'text_name': 'Хроматит',
			'durability': 4000,
			'material_count': [3, 7],
			'img': [chromatite_block],
			'material_img': chromatite_ore,
			'material_name': 'хроматита'
		},
		{
			'name': 'electronyte_block',
			'text_name': 'Электронит',
			'durability': 6000,
			'material_count': [1, 5],
			'img': [electronyte_block],
			'material_img': electronyte,
			'material_name': 'электронита'
		},
		{
			'name': 'mithril_block',
			'text_name': 'Мифрил',
			'durability': 7500,
			'material_count': [3, 7],
			'img': [mithril_block],
			'material_img': mithril_ore,
			'material_name': 'мифрила'
		},
		{
			'name': 'neutronium_block',
			'text_name': 'Нейтрониум',
			'durability': 20000,
			'material_count': [3, 7],
			'img': [neutronium_block],
			'material_img': neutronium_ore,
			'material_name': 'нейтрониума'
		}
	],
	'levels': [
		{
			'name': 'Глубины',
			'depth': [0, 199],
			'new_materials': 'Железо, Уголь, Медь',
			'new_materials_img': [iron_ore, coal, copper_ore],
			'basement': 'Камень',
			'basement_img': [cave_1_block]
		},
		{
			'name': 'Черные Глубины',
			'depth': [200, 599],
			'new_materials': 'Магнетит, Сера',
			'new_materials_img': [magnetite_ore, sulfur],
			'basement': 'Камень',
			'basement_img': [cave_2_block]
		},
		{
			'name': 'Темные пещеры',
			'depth': [600, 999],
			'new_materials': 'Титан, Серебро',
			'new_materials_img': [titan_ore, silver],
			'basement': 'Темный камень',
			'basement_img': [cave_3_block]
		},
		{
			'name': 'Магмовые пещеры',
			'depth': [1000, 1799],
			'new_materials': 'Хроматит, Электронит',
			'new_materials_img': [chromatite_ore, electronyte],
			'basement': 'Магмовый камень',
			'basement_img': [cave_4_block]
		},
		{
			'name': 'Лавовые просторы',
			'depth': [1800, 2999],
			'new_materials': 'Мифрил, Нейтрониум',
			'new_materials_img': [mithril_ore, neutronium_ore],
			'basement': 'Магмовый камень',
			'basement_img': [cave_5_block]
		}
	],
	'tools': [
		{
			'name': 'wood_pickaxe',
			'img': wood_pickaxe,
			'text_name': 'Деревянная кирка',
			'damage': 10
		},
		{
			'name': 'copper_pickaxe',
			'img': copper_pickaxe,
			'text_name': 'Медная кирка',
			'damage': 25,
			'craft_text': '150 медной руды',
			'craft_count': {'copper_ore': 150},
			'materials_img': [copper_ore]
		},
		{
			'name': 'iron_pickaxe',
			'img': iron_pickaxe,
			'text_name': 'Железная кирка',
			'damage': 45,
			'craft_text': '200 железной руды',
			'craft_count': {'iron_ore': 200},
			'materials_img': [iron_ore]
		},
		{
			'name': 'magnetite_pickaxe',
			'img': magnetite_pickaxe,
			'text_name': 'Магнетитовая кирка',
			'damage': 60,
			'craft_text': '200 магнетита',
			'craft_count': {'magnetite_ore': 200},
			'materials_img': [magnetite_ore],
			'possibilities_text': 'Руды вокруг вас выделяются'
		},
		{
			'name': 'titan_pickaxe',
			'img': titan_pickaxe,
			'text_name': 'Титановая кирка',
			'damage': 150,
			'craft_text': '250 титана',
			'craft_count': {'titan_ore': 250},
			'materials_img': [titan_ore],
			'possibilities_text': 'Раз в пять ударов наносит двойной удар'
		},
		{
			'name': 'silver_pot',
			'img': silver_pot,
			'text_name': 'Серебрянный горшок монет',
			'craft_text': '150 серебра и 200 монет',
			'craft_count': {'silver': 150, 'coins': 200},
			'materials_img': [silver, coins],
			'possibilities_text': 'Необходим для крафта скилла'
		},
		{
			'name': 'chromatite_pickaxe',
			'img': chromatite_pickaxe,
			'text_name': 'Хроматитовая кирка',
			'damage': 300,
			'craft_text': '200 хроматита',
			'craft_count': {'chromatite': 200},
			'materials_img': [chromatite_ore],
			'possibilities_text': 'Наносит отравление, которое наносит 80 урона раз в 2 секунды'
		},
		{
			'name': 'electronyte_lantern',
			'img': electronyte_lantern,
			'text_name': 'Электронитовый фонарь',
			'craft_text': '250 электронита и 150 магнетита',
			'craft_count': {'electronyte': 250, 'magnetite_ore': 150},
			'materials_img': [electronyte, magnetite_ore],
			'possibilities_text': 'Улучшает видимость блоков на +2'
		},
		{
			'name': 'mithril_pickaxe',
			'img': mithril_pickaxe,
			'text_name': 'Мифриловая кирка',
			'damage': 1000,
			'craft_text': '300 мифрила',
			'craft_count': {'mithril_ore': 300},
			'materials_img': [mithril_ore]
		},
		{
			'name': 'neutronium_pickaxe',
			'img': neutronium_pickaxe,
			'text_name': 'Нейтронная кирка',
			'damage': 800,
			'craft_text': '200 нейтрониума',
			'craft_count': {'neutronium_ore': 200},
			'materials_img': [neutronium_ore],
			'possibilities_text': 'С шансом 10% при ломании блока вызывает взрыв 2х2'
		}
	],
	'skills': [
		{
			'text_name': 'Больше усилий!',
			'name': 'more_efforts',
			'img': muscle,
			'description': 'Увеличивает вашу выносливость в 2 раза',
			'craft_count': {'coal': 50, 'coins': 100},
			'materials_img': [coal, coins],
			'craft_text': '50 угля и 100 монет',
			'buff': 'pass',
			'buff_text': 'x2 урон на 30 секунд',
			'cooldown': 100
		},
		{
			'text_name': 'Динамит!',
			'name': 'dynamite',
			'img': dynamite,
			'description': 'Взрывает динамит на выбранной вами точке',
			'craft_count': {'sulfur': 80, 'coal': 100, 'coins': 50},
			'materials_img': [sulfur, coal, coins],
			'craft_text': '80 серы, 100 угля и 50 монет',
			'buff': 'pass',
			'buff_text': 'взрыв 3х3',
			'cooldown': 150
		},
		{
			'text_name': 'Удача!',
			'name': 'lucky',
			'img': clover,
			'description': 'Увеличивает количество добываемого материала  в 4 раза',
			'craft_count': {'silver_pot': 1},
			'materials_img': [silver_pot],
			'craft_text': 'Серебрянный горшок',
			'buff': 'pass',
			'buff_text': 'x4 добыча на 15 секунд',
			'cooldown': 150
		},
		{
			'text_name': 'Магнитный взрыв!',
			'name': 'magnet_explosion',
			'img': magnet,
			'description': 'Собирает руды вокруг вас',
			'craft_count': {'magnetite_ore': 100, 'electronyte': 80, 'coins': 150},
			'materials_img': [magnetite_ore, electronyte, coins],
			'craft_text': '100 магнетита, 80 электронита и 150 монет',
			'buff': 'pass',
			'buff_text': 'взрыв 4х4, собирающий только руды',
			'cooldown': 300
		},
		{
			'text_name': 'Бур!',
			'name': 'drill',
			'img': drill,
			'description': 'Копает и собирает ресурсы одной вертикальной полосой',
			'craft_count': {'neutronium_ore': 80, 'mithril': 150},
			'materials_img': [neutronium_ore, mithril_ore],
			'craft_text': '80 нейтрониума и 150 мифрила',
			'buff': 'pass',
			'buff_text': 'копает полосу в выбранном месте 2x10',
			'cooldown': 300
		},
	]
}

export default game_data