import React from 'react';
import data from '../../../classes/Data.js';
import { craft, right_arrow } from '../../../assets/icons/group.js';

const item = ({ set, tool, materials }) => {
    return (
        <button className='craft-modal__item' onClick={() => set(tool)}>
            <div className='craft-modal__item-top-side'>
                {tool.text_name}
            </div>
            <div className='craft-modal__item-bottom-side'>
                <div className="craft-modal__item-craft">
                    {
                        Object.entries(tool.craft_count).map((item, i) => {
                            item[0] = data.find(materials, item[0]).img
                            return (
                                <div key={i} className='craft-modal__item-craft-material'>
                                    <img src={item[0]} alt='material'/>
                                    <span>{item[1]}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='craft-modal__item-arrow'>
                    <img className='arrow' src={right_arrow} alt="arrow" />
                    <img className='craft' src={craft} alt="craft" />
                </div>
                <div className='craft-modal__item-img'>
                    <img src={tool.img} alt="tool" />
                </div>
            </div>
        </button>
    );
};

export default item ;