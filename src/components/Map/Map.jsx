import React from 'react';
import data from '../../classes/Data.js';
import { useSelector } from 'react-redux';

import Block from './components/Block';
import generation from '../../classes/Generation.js';

const Map = () => {
    const mergedData = data.getMergedData();
    const level = useSelector((state) => state.level);

    const background = data.find(mergedData.levels, level.name);

    const getBlockInfo = (name) => {
        return data.find(mergedData.blocks, name);
    };

    const findBlock = (imgs) => {
        const levels = {
            cave_1: 0,
            cave_2: 1,
            cave_3: 0,
            cave_4: 0,
            cave_5: 1
        };

        return imgs.length == 1 ? imgs[0] : imgs[levels[level.name]];
    };

    const blocksToGenerate = generation.generateMap(mergedData, level);

    return (
        <aside className="map">
            <div className="map__bg">
                <img src={background.img} alt="bg" />
            </div>

            <div className="map__blocks">
                {blocksToGenerate.map((block, i) => {
                    block = getBlockInfo(block.name);
                    return <Block key={i} name="rock" img={findBlock(block.img)} />;
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
