import React from 'react';
import { damage, possiblity } from '../../../assets/icons/group';
import other from '../../../classes/Other.js';

const ToolsTable = ({tools, materials}) => {
    const formatCraftMaterials = (tool) => {
        let {craft_text, craft_count} = tool;

        if(!craft_text) return '-';

        const result = []
        const materials_img = [];

        for(const material in craft_count){
            materials_img.push(other.find(materials, material).img)
        }

        craft_text = craft_text.split(' и ')

        for(let i = 0; i < materials_img.length; i++){
            result.push(<div>
                <span>{craft_text[i]}</span>
                <img src={materials_img[i]} alt='block' />
            </div>)
        }

        return (<>
            {result.map((itm, i) => <React.Fragment key={i}>{itm}</React.Fragment>)}
        </>);
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
            <h3 className='info-modal__title-h3'>Инструменты</h3>
            <div className='info-modal__tools-table tools-table' id='tools'>
                <div className='tools-table__header'>Название</div>
                <div className='tools-table__header'>Урон</div>
                <div className='tools-table__header'>Крафт</div>
                <div className='tools-table__header'>Способность</div>
                {
                    tools.map((tool, i) => (<React.Fragment key={i}>
                        <div className='tools-table__cell'>
                            <span>{tool.text_name}</span>
                            <img src={tool.img} alt='tool' />
                        </div>
                        <div className='tools-table__cell damage'>
                            {formatDamage(tool)}
                        </div>
                        <div className='tools-table__cell craft'>
                            {formatCraftMaterials(tool)}
                        </div>
                        <div className='tools-table__cell possiblity'>
                            {formatPossiblities(tool)}
                        </div>
                    </React.Fragment>))
                }
            </div>
        </>
    )
}

export default ToolsTable;