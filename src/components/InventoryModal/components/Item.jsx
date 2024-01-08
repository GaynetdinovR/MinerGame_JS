import React from 'react'
import {padlock} from '../../../assets/icons/group.js';
import other from '../../../classes/Other.js';
import { useDispatch } from 'react-redux';
import { equipTool } from '../../../store/slices/inventorySlice.js';

const Item = ({item, array, isBtn}) => {
    const dispatch = useDispatch()

    const {has, name} = item;
    const itemData = other.find(array, name)

    const padlockImg = has ? '' : <img className='padlock' src={padlock} alt='padlock'/>
    let equipButton;

    if(isBtn){
        const btn_text = (item.equiped) ? 'Unequip' : 'Equip'

        equipButton = (<button 
            onClick={() => {dispatch(equipTool(name))}} 
            className='items-inventory__item-btn'
        >{btn_text}</button>)
    }


    return (
        <div className={has ? 'items-inventory__item': 'items-inventory__item blocked'}>
            <div className='items-inventory__item-name'>
                {itemData.text_name}
            </div>
            <div className='items-inventory__item-img'>
                <img src={itemData.img} alt='skill'/>
            </div>
            {equipButton}
            {padlockImg}
        </div>
    )
}

export default Item