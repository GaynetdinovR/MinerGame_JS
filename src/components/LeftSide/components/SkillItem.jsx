import React from 'react';

import { padlock } from '../../../assets/icons/group.js';

const SkillItem = ({ title, img, name, has }) => {
    /**
     * Возвращает замок
     * @returns react-elem
     */
    const getPadlock = () => {
        return <img className="padlock" src={padlock} alt="padlock" />;
    };

    /**
     * Возвращает название класса
     * @returns string
     */
    const getClassName = () => {
        return has || has == undefined
            ? `skills__skill skills__${name}`
            : `skills__skill skills__${name} blocked`;
    };

    return (
        <button title={title} className={getClassName()}>
            <img className="skill" src={img} alt={name} />
            {!has && has != undefined ? getPadlock() : ''}
        </button>
    );
};

export default SkillItem;
