import React from 'react';
import { coins } from '../../assets/icons/group.js';
import data from '../../classes/Data.js'
import Skill from './components/Skill.jsx';
import img_data from '../../static/data/img_data.js';

const LeftSide = () => {
    const skills = [
        {name: 'drill', title: 'Press B to use'},
        {name: 'magnet_explosion', title: 'Press C to use'},
        {name: 'lucky', title: 'Press V to use'},
        {name: 'more_efforts', title: 'Press Z to use'},
        {name: 'dynamite', title: 'Press X to use'},
    ]

    const skillsImg = img_data.skills

    return (
        <aside className='left-side'>
            <div className='left-side__coins'>
                <div className='left-side__coins-img'>
                    <img src={coins} alt='coins' />
                </div>
                <span className='left-side__coins-count'>0</span>
            </div>

            <div className='left-side__skills skills'>
                {
                    skills.map((skill, i) => (
                        <Skill key={i} title={skill.title} name={skill.name} img={data.find(skillsImg, skill.name).img}/>
                    ))
                }
            </div>
        </aside>
    );
};

export default LeftSide;