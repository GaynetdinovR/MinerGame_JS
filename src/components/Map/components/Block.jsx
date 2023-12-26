import React from 'react';

const Block = ({name, img}) => {
    return (
        <button onClick={(e) => e.target.style.opacity = '0'} className={`map__block map__${name}`}>
            <img src={img} alt={name} />
        </button>
    );
};

export default Block;