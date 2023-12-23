import React from 'react';

const Block = (block) => {
    return (
        <button onClick={(e) => e.target.style.opacity = '0'} className={`map__block map__${block.name}`}>
            <img src={block.img} alt={block.name} />
        </button>
    );
};

export default Block;