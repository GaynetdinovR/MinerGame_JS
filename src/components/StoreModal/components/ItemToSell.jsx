import React from "react"

import { coins } from "../../../assets/icons/group";

const ItemToSell = ({item}) => {
    return (
        <div className="to-sell__item">
            <div className="to-sell__item-name">
                {item.text_name}
            </div>
            <div className="to-sell__item-img">
                <img src={item.img} alt="material" />
            </div>
            <div className="to-sell__item-price">
                <span>Цена за 10 шт:</span>
                <div>
                    <img src={coins} alt="coins" />
                    <span>{item.price_to_10}</span>
                </div>
            </div>
            <input className="to-buy__input" type="number"/>
            <button className="to-sell__btn">Sell</button>
        </div>
    )
} 

export default ItemToSell;