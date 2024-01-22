import React from 'react';
import data from '../../../classes/Data';

const MaterialAdded = ({ material }) => {
    const { name, count } = material;
    const { img } = data.find(data.getMergedData().materials, material.name);

    return (
        <div className="material-added">
            <div className="material-added__img">
                <img src={img} alt={name} />
            </div>
            <span className="material-added__count">+{count}</span>
        </div>
    );
};

export default MaterialAdded;
