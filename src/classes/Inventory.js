import data from './Data.js';

class Inventory {
    /**
     * Возвращает выбранный инструмент
     * @param {*} tools array
     * @returns string
     */
    getEquipedTool = (tools) => {
        for (const tool of tools) {
            if (tool.equiped) return tool.name;
        }
    };

    /**
     * Возвращает true/false в зависимости от наличия всех необходимых материалов
     * @returns bool
     */
    hasMaterials = (inventory, count) => {
        const { materials } = inventory;

        for (const material in count) {
            const inventoryMaterialCount = data.find(materials, material).count;
            const materialCount = count[material];

            if (inventoryMaterialCount < materialCount) return false;
        }

        return true;
    };

    /**
     * Возвращает следующий инструмент/скилл для крафта
     * @param {*} craftedItemName string
     * @param {*} inventory object
     * @returns object/bool
     */
    getNextItemToCraft = (craftedItemName, inventory) => {
        const items = [...inventory.tools, ...inventory.skills];
        const { tools, skills } = data.getMergedData();

        const item = items.filter((item) => item.name != craftedItemName && !item.has)[0];

        return item ? data.find([...tools, ...skills], item.name) : false;
    };
}

const inventory = new Inventory();

export default inventory;
