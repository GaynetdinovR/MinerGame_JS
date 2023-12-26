import React from "react";
import { depth } from "../../../assets/icons/group";

const LevelsTable = ({levels}) => {
    const formatMaterials = (level) => {
        let {new_materials, new_materials_img} = level;
        new_materials = new_materials.split(', ')
        let result = [];

        for(let i = 0; i < new_materials.length; i++){
            result.push(<>
                    <span>{new_materials[i]}</span>
                    <img src={new_materials_img[i]} alt='block'/>
                </>)
        }

        console.log(level, new_materials, result)

        return (<>{result.map(i => i)}</>)
    }

    return (
        <>
            <h3 className="info-modal__title-h3">Уровни</h3>
            <div className='info-modal__levels-table levels-table' id='levels'>
                <div className='levels-table__header'>Название</div>
                <div className='levels-table__header'>Глубина</div>
                <div className='levels-table__header'>Порода</div>
                <div className='levels-table__header'>Руды</div>
                {
                    levels.map(level => (
                        <>
                            <div className="levels-table__cell">
                                {level.name}
                            </div>
                            <div className="levels-table__cell depth">
                                <img src={depth} alt="depth"/>
                                <span>{level.depth[0]}-{level.depth[1]}м</span>
                            </div>
                            <div className="levels-table__cell">
                                {level.basement}
                                <img src={level.basement_img} alt="block" />
                            </div>
                            <div className="levels-table__cell">
                                {formatMaterials(level)}
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default LevelsTable;