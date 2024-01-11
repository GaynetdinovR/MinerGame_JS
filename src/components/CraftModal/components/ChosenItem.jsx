import React from 'react';
import { craft } from '../../../assets/icons/group';
import data from '../../../classes/Data';

const CraftItem = ({ tool, materials }) => {
    return (
        <div className='craft-modal__craft'>
            <div className='craft-modal__chosen'>
                <div className='craft-modal__chosen-left-side'>
                    <div className='craft-modal__chosen-img'>
                        <img src={tool.img} alt="tool" />
                    </div>
                    <div className='craft-modal__chosen-craft-materials'>
                        {
                            Object.entries(tool.craft_count).map((item, i) => {
                                item[0] = data.find(materials, item[0]).img
                                return (
                                    <div key={i} className='craft-modal__chosen-craft-material'>
                                        <img src={item[0]} alt='material'/>
                                        <span>{item[1]}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='craft-modal__chosen-right-side'>
                    <h3 className='craft-modal__chosen-name'>{tool.text_name}</h3>
                    {tool.damage ? (<span>Урон: {tool.damage}</span>) : ''}
                    {tool.possibilities_text ? (<p>Особенности: {tool.possibilities_text}</p>) : ''}
                    {tool.description ? (<p>Описание: {tool.description}</p>) : ''}
                    {tool.buff_text ? (<p>Бафф: {tool.buff_text}</p>) : ''}
                </div>
            </div>

            <button className='craft-modal__craft-btn'>
                <img src={craft} alt="craft" />
            </button>
        </div>
    );
};

export default CraftItem;