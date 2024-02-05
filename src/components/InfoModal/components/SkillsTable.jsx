import React from 'react';
import data from '../../../classes/Data.js';

import { possiblity, text, time } from '../../../assets/icons/group';

const SkillsTable = ({ skills, materials, tools }) => {
    /**
     * Возвращает изображения материалов для крафта
     * @param {*} craft_count object
     * @returns array
     */
    const getMaterialImgs = (craft_count) => {
        const material_imgs = [];

        for (const material in craft_count) {
            if (material === 'silver_pot') {
                material_imgs.push(data.find(tools, material).img);
                continue;
            }
            material_imgs.push(data.find(materials, material).img);
        }

        return material_imgs;
    };

    const getCraftText = (craft_text) => {
        const temp = craft_text.split(' и ');
        craft_text = [...temp[0].split(', ')];

        if (temp[1]) craft_text.push(temp[1]);

        return craft_text;
    };

    /**
     * Форматирует материалы крафтов
     * @param {*} skill object
     * @returns React-Element
     */
    const formatCraftMaterials = (skill) => {
        let { craft_text, craft_count } = skill;

        const result = [];

        const material_imgs = getMaterialImgs(craft_count);
        craft_text = getCraftText(craft_text);

        for (let i = 0; i < material_imgs.length; i++) {
            result.push(
                <div>
                    <span>{craft_text[i]}</span>
                    <img src={material_imgs[i]} alt="block" />
                </div>
            );
        }

        return (
            <>
                {result.map((itm, i) => (
                    <React.Fragment key={i}>{itm}</React.Fragment>
                ))}
            </>
        );
    };

    return (
        <>
            <h3 className="info-modal__title-h3">Скиллы</h3>
            <div className="info-modal__skills-table skills-table" id="skills">
                <div className="skills-table__header">Название</div>
                <div className="skills-table__header">Описание</div>
                <div className="skills-table__header">Крафт</div>
                <div className="skills-table__header">К/Д</div>
                <div className="skills-table__header">Способность</div>
                {skills.map((skill, i) => (
                    <React.Fragment key={i}>
                        <div className="skills-table__cell name">
                            <span>{skill.text_name}</span>
                            <img src={skill.img} alt="text" />
                        </div>
                        <div className="skills-table__cell text">
                            <img src={text} alt="text" />
                            <span>{skill.description}</span>
                        </div>
                        <div className="skills-table__cell craft">
                            {formatCraftMaterials(skill)}
                        </div>
                        <div className="skills-table__cell time">
                            <img src={time} alt="text" />
                            <span>{skill.cooldown} сек</span>
                        </div>
                        <div className="skills-table__cell possiblity">
                            <img src={possiblity} alt="possiblity" />
                            <span>{skill.buff_text}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default SkillsTable;
