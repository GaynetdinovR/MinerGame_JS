import React, {useState} from "react"
import { coins } from "../../../assets/icons/group";

const ItemToBuy = ({item, isInput}) => {
    const input = <input className="to-buy__input" type="number"/>
    
    return (
        <div className="to-buy__item">
        <div className="to-buy__item-name">
            {item.text_name}
        </div>
        <div className="to-buy__item-img">
            <img src={item.img} alt="material" />
        </div>
        <div className="to-buy__item-price">
            <span>{item.price_to_10 ? 'Цена за 10 шт:': 'Цена:'}</span>
            <div>
                <img src={coins} alt="coins" />
                <span>{item.price_to_10 ? item.price_to_10: item.price}</span>
            </div>
        </div>
        <div>
            {isInput ? input : ''}
        </div>
        <button className="to-buy__btn">Buy</button>
    </div>
    )
} 

export default ItemToBuy;