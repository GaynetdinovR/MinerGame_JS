import React, { useState } from 'react';

import { padlock } from '../../../assets/icons/group.js';
import { setLucky, setMoreEfforts } from '../../../store/slices/skillsSlice.js';
import { useDispatch } from 'react-redux';
import other from '../../../classes/Other.js';
import data from '../../../classes/Data.js';
import skills from '../../../classes/Skills.js';

const SkillItem = ({ title, img, name, has }) => {
    const dispatch = useDispatch();

    const [isDisabled, setDisabled] = useState(false);

    const mergedData = data.getMergedData();

    const useMoreEfforts = () => {
        const setMoreEffortsState = (value) => dispatch(setMoreEfforts(value));

        skills.useTimeSkill(
            setMoreEffortsState,
            mergedData.skills[0],
            '#time_more_efforts',
            setDisabled
        );
    };

    const useLucky = () => {
        const setLuckyState = (value) => dispatch(setLucky(value));

        skills.useTimeSkill(setLuckyState, mergedData.skills[3], '#time_lucky', setDisabled);
    };

    const useDynamite = () => {};
    const useMagnetExplosion = () => {};
    const useDrill = () => {};

    const useSkill = {
        more_efforts: useMoreEfforts,
        dynamite: useDynamite,
        magnet_explosion: useMagnetExplosion,
        lucky: useLucky,
        drill: useDrill
    };

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
        <button
            disabled={isDisabled}
            title={title}
            className={getClassName()}
            onClick={() => useSkill[name]()}>
            <img className="skill" src={img} alt={name} />
            {!has && has != undefined ? getPadlock() : ''}
            <div id={`time_${name}`} className="skills__skill-time"></div>
        </button>
    );
};

export default SkillItem;
