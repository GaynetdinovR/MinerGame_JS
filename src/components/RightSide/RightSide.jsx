import React from 'react';
import { backpack, craft, house, info} from '../../assets/icons/group';
import Button from './components/Button.jsx';

const RightSide = ({set}) => {

    const buttons = [
        {name: 'backpack', img: backpack, setModal: set.inventoryModal},
        {name: 'house', img: house, setModal: set.storeModal},
        {name: 'info', img: info, setModal: set.infoModal},
        {name: 'craft', img: craft, setModal: set.craftModal},
    ];

    return (
        <aside className='right-side'>
            <div className='right-side__buttons'>
                {buttons.map((btn, i) => (<Button key={i} name={btn.name} img={btn.img} setModal={btn.setModal}/>))}
            </div>

            <span className='right-side__level'>Глубины: 50м</span>
        </aside>
    );
};

export default RightSide;