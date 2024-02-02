class Level {
    changeLevel = (level) => {
        this.updateInventory();
        this.updateStore();
        this.updateCrafts();
    };

    updateInventory = () => {};

    updateStore = () => {};

    updateCrafts = () => {};
}

const level = new Level();

export default level;
