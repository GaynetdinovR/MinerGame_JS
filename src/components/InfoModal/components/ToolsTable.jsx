import React from "react";
import { damage, possiblity } from "../../../assets/icons/group";

const ToolsTable = ({tools}) => {
    const formatCraftMaterials = (tool) => {
        let {craft_text, materials_img} = tool;
        const result = []

        if(!craft_text) return '-';

        craft_text = craft_text.split(' и ')

        for(let i = 0; i < materials_img.length; i++){
            result.push(<div>
                <span>{craft_text[i]}</span>
                <img src={materials_img[i]} alt="block" />
            </div>)
        }

        return (<>{result.map(i => i)}</>);
    } 

    const formatPossiblities = (tool) => {
        const result = (<>
            <img src={possiblity} alt='possiblity'/>
            <span>{tool.possibilities_text}</span>
        </>)

        return (tool.possibilities_text) ? result : '-' 
    }
    
    const formatDamage = (tool) => {
        const result = (<>
            <img src={damage} alt='damage'/>
            <span>{tool.damage}</span>
        </>)

        return (tool.damage) ? result : '-'
    }

    return (
        <>
            <h3 className="info-modal__title-h3">Инструменты</h3>
            <div className='info-modal__tools-table tools-table' id='tools'>
                <div className='tools-table__header'>Название</div>
                <div className='tools-table__header'>Урон</div>
                <div className='tools-table__header'>Крафт</div>
                <div className='tools-table__header'>Способность</div>
                {
                    tools.map(tool => (<>
                        <div className="tools-table__cell">
                            <span>{tool.text_name}</span>
                            <img src={tool.img} alt="tool" />
                        </div>
                        <div className="tools-table__cell damage">
                            {formatDamage(tool)}
                        </div>
                        <div className="tools-table__cell craft">
                            {formatCraftMaterials(tool)}
                        </div>
                        <div className="tools-table__cell possiblity">
                            {formatPossiblities(tool)}
                        </div>
                    </>))
                }
            </div>
        </>
    )
}

export default ToolsTable;