import React from 'react';
import { coins, drill, muscle, magnet, clover, dynamite } from '../../assets/icons/group.js';
import Skill from './components/Skill.jsx';

const LeftSide = () => {
    const skills = [
        {name: 'drill', img: drill, title: 'Press B to use'},
        {name: 'magnet', img: magnet, title: 'Press C to use'},
        {name: 'clover', img: clover, title: 'Press V to use'},
        {name: 'muscle', img: muscle, title: 'Press Z to use'},
        {name: 'dynamite', img: dynamite, title: 'Press X to use'},
    ]

    return (
        <aside className="left-side">
            <div className='left-side__coins'>
                <div className="left-side__coins-img">
                    <img src={coins} alt="coins" />
                </div>
                <span className='left-side__coins-count'>0</span>
            </div>

            <div className="left-side__skills skills">
                {skills.map((skill, i) => (<Skill key={i} title={skill.title} name={skill.name} img={skill.img}/>))}
            </div>
        </aside>
    );
};

export default LeftSide;