class Inventory {
    findEquipedTool = (tools) => {
        for (const tool of tools) {
            if (tool.equiped) return tool.name;
        }
    };
}

const inventory = new Inventory();

export default inventory;
