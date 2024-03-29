import React from 'react';
import data from '../../../classes/Data.js';

import { durability } from '../../../assets/icons/group.js';

const BlocksTable = ({ blocks, materials }) => {
    /**
     * Форматирует данные материалов блока
     * @param {*} block object
     * @returns React-Elem
     */
    const formatMaterialInfo = (block) => {
        if (!block.hasOwnProperty('material')) return '-';

        let { material_count, material_name, material } = block;

        const material_img = <img src={data.find(materials, material).img} alt="block" />;
        material_count = `${material_count[0]}-${material_count[1]} `;

        return (
            <>
                <span>{material_count}</span>
                <span>{material_name}</span>
                {material_img}
            </>
        );
    };

    return (
        <>
            <h3 className="info-modal__title-h3">Блоки</h3>
            <div className="info-modal__blocks-table blocks-table" id="blocks">
                <div className="blocks-table__header">Название</div>
                <div className="blocks-table__header">Прочность</div>
                <div className="blocks-table__header">Материалы</div>
                {blocks.map((block, i) => (
                    <React.Fragment key={i}>
                        <div className="blocks-table__cell">
                            <span>{block.text_name}</span>
                            <div>
                                <img key={i} src={block.img} alt="block" />
                            </div>
                        </div>
                        <div className="blocks-table__cell durability">
                            <img src={durability} alt="block" />
                            <span>{block.durability}</span>
                        </div>
                        <div className="blocks-table__cell">{formatMaterialInfo(block)}</div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default BlocksTable;
