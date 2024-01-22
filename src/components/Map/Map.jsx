import React from 'react';
import data from '../../classes/Data.js';
import { useSelector } from 'react-redux';
import Block from './components/Block.jsx';
import map from '../../classes/Map.js';
import inventory from '../../classes/Inventory.js';
import other from '../../classes/Other.js';

const Map = ({ setMaterialAdded }) => {
    const level = useSelector((state) => state.level);
    const mapState = useSelector((state) => state.map);
    const inventoryState = useSelector((state) => state.inventory);

    const { levels, tools } = data.getMergedData();
    const background = data.find(levels, level.name);

    const blocksToGenerate = mapState.blocks;

    /**
     * Возвращает используемый инструмент
     * @returns object
     */
    const getEquipedToolInfo = () => {
        const toolName = inventory.findEquipedTool(inventoryState.tools);
        const { name, damage } = data.find(tools, toolName);

        return { name: name, damage: damage };
    };

    /**
     * Возвращает объединенную информацию о блоке
     * @param {*} block object
     * @param {*} i number
     * @param {*} blockInfo object
     * @returns
     */
    const getMergedBlockInfo = (block, i, blockData) => {
        const { name, light, breaked } = block;

        let info = {
            name: name,
            x: i % 10,
            y: Math.floor(i / 10),
            light: light,
            breaked: breaked,
            durability: blockData.durability
        };

        if (blockData.material != undefined) {
            const addInfo = {
                material: blockData.material,
                material_count: other.randomInRange(blockData.material_count)
            };

            info = { ...info, ...addInfo };
        }

        return info;
    };

    return (
        <aside className="map">
            <div className="map__bg">
                <img src={background.img} alt="bg" />
            </div>

            <div className="map__blocks">
                {blocksToGenerate.flat().map((mapBlock, i) => {
                    const blockData = map.getBlockData(mapBlock.name);

                    const block = getMergedBlockInfo(mapBlock, i, blockData);
                    const tool = getEquipedToolInfo();

                    return (
                        <Block
                            setMaterialAdded={setMaterialAdded}
                            key={i}
                            block={block}
                            tool={tool}
                            img={blockData.img}
                        />
                    );
                })}
            </div>
            <div className="map__line-wrap">
                <div className="map__line"></div>
                <span className="map__depth">{level.depth}м</span>
            </div>
        </aside>
    );
};

export default Map;
