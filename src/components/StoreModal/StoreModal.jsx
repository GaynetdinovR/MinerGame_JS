import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../Modal/Modal.jsx';
import ItemToSell from './components/ItemToSell.jsx';
import ItemToBuy from './components/ItemToBuy.jsx';

import data from '../../classes/Data.js';

const StoreModal = ({ isOpen, setModal }) => {
    const {name} = useSelector(state => state.level);
    const {levels, materials, skills} = data.getMergedData();
    
    const findSkillsToBuy = () => {
        let result = [];

        for(const level of levels){
            if(level.name === name) break;

            result.push(...level.new_skills)
        }

        return result;
    }
    
    const findResourcesToBuy = () => {
        let result = [];

        for(const level of levels){
            if(level.name === name) break;

            result.push(...level.new_materials)
        }

        return result;
    }

    const findResourcesToSell = () => {
        return data.find(levels, name).new_materials
    }

    return (
        <Modal isOpen={isOpen} setModal={setModal} className='store-modal'>
            <h2 className='store-modal__title title'>Магазин</h2>
            <div className={name === 'cave_1'? 'store-modal__content notspace' :"store-modal__content space"}>
                <div className="store-modal__left-side to-buy">
                    <div className="to-buy__skills"> 
                        {findSkillsToBuy().map(item => {
                            item = data.find(skills, item)
                            return (<ItemToBuy item={item} isInput={false}/>)
                        })}
                    </div>
                    <div className="to-buy__materials"> 
                        {findResourcesToBuy().map(item => {
                            item = data.find(materials, item)
                            return (<ItemToBuy item={item} isInput={true}/>)
                        })}
                    </div>
                </div>
                <div className="store-modal__right-side to-sell">
                    {findResourcesToSell().map(item => {
                        item = data.find(materials, item)
                        return (<ItemToSell item={item}/>)
                    })}
                    <button className={ name === 'cave_1'? "to-sell__sell-all upper" :"to-sell__sell-all"}>
                        Sell all
                    </button> 
                </div>
            </div>
        </Modal>
    );
};

export default StoreModal;