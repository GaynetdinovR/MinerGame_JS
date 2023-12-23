import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { backpack, craft, house, info} from '../../assets/icons/group';
import Button from './components/Button.jsx'

const RightSide = () => {
    const buttons = [
        {name: 'backpack', img: backpack},
        {name: 'house', img: house},
        {name: 'info', img: info},
        {name: 'craft', img: craft},
    ];

    return (
        <aside className="right-side">
            <div className="right-side__buttons">
                {buttons.map((btn, i) => (<Button key={i} name={btn.name} img={btn.img}/>))}
            </div>

            <span className="right-side__level">Глубины: 50м</span>
        </aside>
    );
};

export default RightSide;