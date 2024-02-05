import data from './Data.js';
import other from './Other.js';

class Block {
    /**
     * Нанести урон блоку или сломать его
     * @param {*} durability number
     * @param {*} damage number
     * @returns bool
     */
    isDamageBlock = (durability, damage) => {
        return durability - damage > 0;
    };

    /**
     * Является ли блок сундуком
     * @param {*} materials array
     * @returns bool
     */
    isBlockChest = (materials) => {
        return materials != undefined;
    };

    /**
     * Находится ли блок на краю карты
     * @param {*} y number
     * @returns bool
     */
    isBlockOnMapSide = (y) => {
        return y >= 8;
    };

    /**
     * Возвращает данные блока
     * @param name string
     * @returns object
     */
    getBlockData = (name) => {
        return data.find(data.getMergedData().blocks, name);
    };

    /**
     * Есть ли материалы у блока
     * @param {*} material array
     * @param {*} breaked bool
     * @returns bool
     */
    isBlockHasMaterial = (material, breaked) => {
        return material != undefined && !breaked;
    };

    /**
     * Возвращает форматированный объект материала
     * @param {*} material string
     * @param {*} material_count number
     * @returns object
     */
    getFormattedMaterial = (material, material_count) => {
        return {
            material: material,
            material_count: other.randomInRange(material_count)
        };
    };

    /**
     * Возвращает блок, с нанесенным ему уроном
     * @param {*} mapState [[]]
     * @param {*} x number
     * @param {*} y number
     * @param {*} damage number
     * @returns
     */
    getDamagedBlock = (mapState, x, y, damage) => {
        const blockInfo = { ...mapState[y][x] };

        blockInfo.durability_changed -= damage;

        return blockInfo;
    };

    /**
     * Возвращает процент заполнения полоски здоровья
     * @param {*} durability number
     * @returns number
     */
    getHealthBarPercentage = (durability, durability_max) => {
        return Math.floor((durability / durability_max) * 100);
    };

    /**
     * Возвращает стили полоски здоровья относительно его прочности
     * @param {*} durability number
     * @returns object
     */
    getHealthBarStyles = (durability, durability_max) => {
        const percentage = this.getHealthBarPercentage(durability, durability_max);

        const styles = {
            backgroundColor: '#17A400',
            width: 'calc(100% - 10px)'
        };

        if (percentage >= 75) styles.backgroundColor = '#17A400';
        if (percentage >= 35 && percentage < 75) styles.backgroundColor = '#BB9D00';
        if (percentage < 35) styles.backgroundColor = '#CC0000';

        styles.width = `calc(${percentage}% - 10px)`;

        return styles;
    };

    /**
     * Возвращает материалы сундука в удобном формате
     * @param {*} materialsData array
     * @returns array
     */
    getFormattedChestMaterials = (materialsData) => {
        const getUniqArray = (array) => {
            array = array.map((obj) => JSON.stringify(obj));

            return Array.from(new Set(array)).map((obj) => JSON.parse(obj));
        };

        const items = [];

        for (let i = 0; i < 3; i++) {
            items.push(other.drop(materialsData));
        }

        const materials = [];

        for (const item of getUniqArray(items)) {
            const material = {
                name: item.name,
                count: other.randomInRange(item.count)
            };

            materials.push(material);
        }

        return { materials: materials };
    };
}

const block = new Block();

export default block;
