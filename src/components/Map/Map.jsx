import React from 'react';
import data from '../../classes/Data.js';
import { useSelector } from 'react-redux';
import Block from './components/Block.jsx';

const Map = () => {
    const level = useSelector((state) => state.level);
    const map = useSelector((state) => state.map);

    const mergedData = data.getMergedData();
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

    const blocksToGenerate = map.blocks;

    return (
        <aside className="map">
            <div className="map__bg">
                <img src={background.img} alt="bg" />
            </div>

            <div className="map__blocks">
                {blocksToGenerate.flat().map((block, i) => {
                    let blockInfo = getBlockInfo(block.name);

                    const coords = [i % 10, Math.floor(i / 10)];

                    const temp = { ...block, ...blockInfo };

                    return (
                        <Block
                            key={i}
                            x={coords[0]}
                            y={coords[1]}
                            light={temp.light}
                            breaked={temp.breaked}
                            name={temp.name}
                            img={findBlock(temp.img)}
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
