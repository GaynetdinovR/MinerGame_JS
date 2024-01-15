class Map {
    getBlock = (blocks, x, y) => {
        return blocks.flat().filter((block) => block.x == x && block.y == y)[0];
    };
}

const map = new Map();

export default map;
