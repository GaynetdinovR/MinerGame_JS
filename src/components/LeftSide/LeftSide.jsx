import React from 'react';
import data from '../../classes/Data.js';

import SkillItem from './components/SkillItem.jsx';
import { coins } from '../../assets/icons/group.js';
import { useSelector } from 'react-redux';

const LeftSide = () => {
    const inventoryState = useSelector((state) => state.inventory);

    const skills = {
        drill: 'Press B to use',
        magnet_explosion: 'Press C to use',
        lucky: 'Press V to use',
        more_efforts: 'Press Z to use',
        dynamite: 'Press X to use'
    };

    const skillsImg = data.getMergedData().skills;

    return (
        <aside className="left-side">
            <div className="left-side__coins">
                <div className="left-side__coins-img">
                    <img src={coins} alt="coins" />
                </div>
                <span className="left-side__coins-count">
                    {data.find(inventoryState.materials, 'coins').count}
                </span>
            </div>

            <div className="left-side__skills skills">
                {inventoryState.skills.map((skill, i) => (
                    <SkillItem
                        key={i}
                        has={skill.has}
                        title={skills[skill.name]}
                        name={skill.name}
                        img={data.find(skillsImg, skill.name).img}
                    />
                ))}
            </div>
        </aside>
    );
};

export default LeftSide;
