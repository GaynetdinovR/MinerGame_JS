import React from 'react';
import data from '../../classes/Data.js';

import SkillItem from './components/SkillItem.jsx';
import { coins } from '../../assets/icons/group.js';
import { useSelector } from 'react-redux';

const LeftSide = () => {
    const inventory = useSelector((state) => state.inventory.materials);

    const skills = [
        { name: 'drill', title: 'Press B to use' },
        { name: 'magnet_explosion', title: 'Press C to use' },
        { name: 'lucky', title: 'Press V to use' },
        { name: 'more_efforts', title: 'Press Z to use' },
        { name: 'dynamite', title: 'Press X to use' }
    ];

    const skillsImg = data.getMergedData().skills;

    return (
        <aside className="left-side">
            <div className="left-side__coins">
                <div className="left-side__coins-img">
                    <img src={coins} alt="coins" />
                </div>
                <span className="left-side__coins-count">
                    {data.find(inventory, 'coins').count}
                </span>
            </div>

            <div className="left-side__skills skills">
                {skills.map((skill, i) => (
                    <SkillItem
                        key={i}
                        title={skill.title}
                        name={skill.name}
                        img={data.find(skillsImg, skill.name).img}
                    />
                ))}
            </div>
        </aside>
    );
};

export default LeftSide;
