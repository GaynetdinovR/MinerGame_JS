import React from 'react';
import { useSelector } from 'react-redux';
import data from '../../classes/Data.js';

import Modal from '../Modal/Modal.jsx';
import ItemToSell from './components/ItemToSell.jsx';
import ItemToBuy from './components/ItemToBuy.jsx';

const StoreModal = ({ isOpen, setModal }) => {
    const levelState = useSelector((state) => state.level);
    const { levels, materials } = data.getMergedData();

    /**
     * Находит материалы на покупку
     * @returns array
     */
    const findResourcesToBuy = () => {
        let result = [];

        for (const level of levels) {
            if (level.name === levelState.name) break;

            result.push(...level.new_materials);
        }

        return result;
    };

    /**
     * Находит материалы на продажу
     * @returns array
     */
    const findResourcesToSell = () => {
        return data.find(levels, levelState.name).new_materials;
    };

    return (
        <Modal isOpen={isOpen} setModal={setModal} className="store-modal">
            <h2 className="store-modal__title title">Магазин</h2>
            <div
                className={
                    levelState.name === 'cave_1'
                        ? 'store-modal__content notspace'
                        : 'store-modal__content space'
                }>
                <div className="store-modal__left-side to-buy">
                    <div className="to-buy__materials">
                        {findResourcesToBuy().map((item, i) => {
                            item = data.find(materials, item);
                            return <ItemToBuy key={i} item={item} isInput={true} />;
                        })}
                    </div>
                </div>
                <div className="store-modal__right-side to-sell">
                    {findResourcesToSell().map((item, i) => {
                        item = data.find(materials, item);
                        return <ItemToSell key={i} item={item} />;
                    })}
                    <button
                        className={
                            levelState.name === 'cave_1'
                                ? 'to-sell__sell-all upper'
                                : 'to-sell__sell-all'
                        }>
                        Sell all from this level
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default StoreModal;
