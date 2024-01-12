import React from 'react';

const SkillItem = (skill) => {
    return (
        <button title={skill.title} className={`skills__skill skills__${skill.name}`}>
            <img src={skill.img} alt={skill.name} />
        </button>
    );
};

export default SkillItem;
