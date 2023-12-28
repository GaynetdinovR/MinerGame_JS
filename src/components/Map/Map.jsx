import React from 'react';
import Block from './components/Block';
import {cave_1_block, cave_1_bg} from '../../assets/content/group.js';

const Map = () => {
    const blocks = new Array(100).fill(0);

    return (
        <aside className="map">
            <div className='map__bg'>
                <img src={cave_1_bg} alt="bg" />
            </div>
            
            <div className='map__blocks'>
                {blocks.map((item, i) => (<Block key={i} name='rock' img={cave_1_block}/>))}
            </div>
            <div className="map__line-wrap">
                <div className="map__line"></div>
                <span className='map__depth'>50м</span>
            </div>
        </aside>
    );
};

export default Map;