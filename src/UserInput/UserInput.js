import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red',
        width: '20%'
    };
    return ( 
    <div>
        <p> Enter your name </p>
    <input 
    type= 'text' 
    style = {inputStyle}
    onChange = {props.changed}
    value=  {props.currentName} />
    </div>
    )
};

export default userInput;