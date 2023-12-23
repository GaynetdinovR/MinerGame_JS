import React from 'react';

const Button = (button) => {
    console.log(button)
    return (
        <button className={`right-side__button right-side__${button.name}`}>
            <img src={button.img} alt={button.name} />
        </button>
    );
};

export default Button;