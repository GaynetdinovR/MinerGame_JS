import React from 'react';
import data from '../../classes/Data.js';
import { useSelector } from 'react-redux';
import Block from './components/Block.jsx';
import map from '../../classes/Map.js';
import inventory from '../../classes/Inventory.js';

const Map = () => {
    const level = useSelector((state) => state.level);
    const mapState = useSelector((state) => state.map);
    const inventoryState = useSelector((state) => state.inventory);

    const { levels, tools } = data.getMergedData();
    const background = data.find(levels, level.name);

    const blocksToGenerate = mapState.blocks;

    return (
        <aside className="map">
            <div className="map__bg">
                <img src={background.img} alt="bg" />
            </div>

            <div className="map__blocks">
                {blocksToGenerate.flat().map((mapBlock, i) => {
                    let blockInfo = map.getBlockInfo(mapBlock.name);

                    const block = {
                        id: i,
                        name: mapBlock.name,
                        x: i % 10,
                        y: Math.floor(i / 10),
                        light: mapBlock.light,
                        breaked: mapBlock.breaked,
                        durability: blockInfo.durability
                    };

                    const toolName = inventory.findEquipedTool(inventoryState.tools);
                    const { name, damage } = data.find(tools, toolName);
                    const tool = { name: name, damage: damage };

                    return <Block key={i} block={block} tool={tool} img={blockInfo.img} />;
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
