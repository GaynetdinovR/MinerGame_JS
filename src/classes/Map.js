import light from './Light.js';

class Map {
    /**
     * Возвращает массив измененных блоков, согласно сломанному блоку
     * @param {*} mapState [[]]
     * @param {*} breakedBlock {x, y, breaked}
     * @returns []
     */
    getUpdatedBlocksWithBreakedBlock = (mapState, breakedBlock) => {
        const mapCopy = light.getUpdatedBlocksByBreakedBlock(mapState, breakedBlock);

        mapCopy.push(breakedBlock);

        return mapCopy;
    };
}

const map = new Map();

export default map;
