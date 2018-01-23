import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
    return (
    <div className="UserOutput">
        <p> Hola Amigo, {props.userName}</p>
        <p> Hola Papi</p>
        </div>
    )
};

export default userOutput;