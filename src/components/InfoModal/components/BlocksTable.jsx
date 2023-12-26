import React from "react";
import { durability } from "../../../assets/icons/group";

const BlocksTable = ({blocks}) => {
    const formatMaterialInfo = (block) => {
        let {material_count, material_img, material_name} = block;

        material_count = (material_count) ? `${material_count[0]}-${material_count[1]} ` : '-'
        material_img = (material_img) ? <img src={material_img} alt='block'/> : ''
        material_name = (material_name) ? material_name : ''
        
        return (
            <>
                <span>{material_count}</span>
                <span>{material_name}</span>
                {material_img}
            </>
        )
    }

    return (
        <>
            <h3 className='info-modal__title-h3'>Блоки</h3>
            <div className='info-modal__blocks-table blocks-table' id='blocks'>
                <div className='blocks-table__header'>Название</div>
                <div className='blocks-table__header'>Прочность</div>
                <div className='blocks-table__header'>Материалы</div>
                {
                    blocks.map(block => (
                        <>
                            <div className="blocks-table__cell">
                                <span>{block.text_name}</span>
                                <div>
                                    {block.img.map(img => <img src={img} alt='block'/>)}
                                </div>
                            </div>
                            <div className="blocks-table__cell durability">
                                <img src={durability} alt='block'/>
                                <span>{block.durability}</span>
                            </div>
                            <div className="blocks-table__cell">
                                {formatMaterialInfo(block)}
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default BlocksTable;