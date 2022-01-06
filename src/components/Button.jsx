import React from 'react';
import './Button.css';
const Button = ({children, onClick}) => {
    return ( 
        // children
        <button onClick={onClick} className='add-button'>
            {children}
        </button>
     );
}

export default Button;