import React from 'react';
import data from '../../classes/Data.js';
import { useSelector } from 'react-redux';

import Block from './components/Block';

const Map = () => {
    const { levels, blocks } = data.getMergedData();
    const { name, depth } = useSelector((state) => state.level);

    const { img, basement } = data.find(levels, name);

    const blocksToGenerate = new Array(100).fill(0);

    /**
     * Находит и возвращает картинку блока уровня
     * @returns React-Img
     */
    const findBasementImg = () => {
        return data.find(blocks, basement).img[0];
    };

    return (
        <aside className="map">
            <div className="map__bg">
                <img src={img} alt="bg" />
            </div>

            <div className="map__blocks">
                {blocksToGenerate.map((item, i) => (
                    <Block key={i} name="rock" img={findBasementImg()} />
                ))}
            </div>
            <div className="map__line-wrap">
                <div className="map__line"></div>
                <span className="map__depth">{depth}м</span>
            </div>
        </aside>
    );
};

export default Map;
