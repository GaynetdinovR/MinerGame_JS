import React from 'react';
import { depth } from '../../../assets/icons/group';
import data from '../../../classes/Data.js';

const LevelsTable = ({levels, materials, blocks}) => {
    const formatMaterials = (new_materials) => {
        const result = [];

        const new_materials_text = new_materials.map(itm => {
            return data.find(materials, itm).text_name
        })

        const new_materials_img = new_materials.map(itm => {
            return data.find(materials, itm).img
        })
        
        for(let i = 0; i < new_materials.length; i++){
            result.push(<>
                <span>{new_materials_text[i]}</span>
                <img src={new_materials_img[i]} alt='block'/>
            </>)
        }

        return (<>
            {result.map((itm, i) => <React.Fragment key={i}>{itm}</React.Fragment>)}
        </>)
    }


    return (
        <>
            <h3 className='info-modal__title-h3'>Уровни</h3>
            <div className='info-modal__levels-table levels-table' id='levels'>
                <div className='levels-table__header'>Название</div>
                <div className='levels-table__header'>Глубина</div>
                <div className='levels-table__header'>Порода</div>
                <div className='levels-table__header'>Руды</div>
                {
                    levels.map((level, i) => {
                        const block = data.find(blocks, level.basement)

                        return(
                            <React.Fragment key={i}>
                                <div className='levels-table__cell'>
                                    {level.text_name}
                                    <img src={level.img} alt='bg' />
                                </div>
                                <div className='levels-table__cell depth'>
                                    <img src={depth} alt='depth'/>
                                    <span>{level.depth[0]}-{level.depth[1]}м</span>
                                </div>
                                <div className='levels-table__cell'>
                                    {block.text_name}
                                    {block.img.map((img, i) => <img key={i} src={img} alt='block'/>)}
                                </div>
                                <div className='levels-table__cell'>
                                    {formatMaterials(level.new_materials)}
                                </div>
                            </React.Fragment>
                        )})
                }
            </div>
        </>
    )
}

export default LevelsTable;