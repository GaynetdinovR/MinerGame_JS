import React from "react";
import { possiblity, text, time } from "../../../assets/icons/group";

const SkillsTable = ({skills}) => {
    const formatCraftMaterials = (tool) => {
        let {craft_text, materials_img} = tool;
        const result = []

        const temp = craft_text.split(' и ')
        craft_text = [...temp[0].split(', ')]

        if(temp[1]) craft_text.push(temp[1])

        console.log(craft_text)

        for(let i = 0; i < materials_img.length; i++){
            result.push(<div>
                <span>{craft_text[i]}</span>
                <img src={materials_img[i]} alt="block" />
            </div>)
        }

        return (<>{result.map(i => i)}</>);
    }

    return (
        <>
            <h3 className="info-modal__title-h3">Скиллы</h3>
            <div className='info-modal__skills-table skills-table' id='skills'>
                <div className='skills-table__header'>Название</div>
                <div className='skills-table__header'>Описание</div>
                <div className='skills-table__header'>Крафт</div>
                <div className='skills-table__header'>К/Д</div>
                <div className='skills-table__header'>Способность</div>
                {
                    skills.map(skill => (<>
                        <div className="skills-table__cell">
                            {skill.text_name}
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
                            <img src={possiblity} alt='possiblity'/>
                            <span>{skill.buff_text}</span>
                        </div>
                    </>))
                }
            </div>
        </>
    )
}

export default SkillsTable;