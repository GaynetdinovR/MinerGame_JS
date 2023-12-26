import React from 'react';

const Button = ({img, name, setModal}) => {
    return (
        <button onClick={() => setModal(true)} className={`right-side__button right-side__${name}`}>
            <img src={img} alt={name} />
        </button>
    );
};

export default Button;