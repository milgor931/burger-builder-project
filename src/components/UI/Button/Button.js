import React from 'react';
import './Button.css';

const button = (props) => {

    let style = {
        backgroundColor: "transparent",
        border: 'none',
        color: 'white',
        outline: 'none',
        cursor: 'pointer',
        font: 'inherit',
        padding: '10px',
        margin: '10px',
        fontWeight: 'bold',
    }

    if (props.disabled) {
        style = {
            ...style,
            color: '#ccc',
            cursor: 'not-allowed',
        }
    }

    if (props.btnType === 'Success') {
        style = {
            ...style,
            color: 'green',
        }
    }

    if (props.btnType === 'Danger') {
        style = {
            ...style,
            color: 'red',
        }
    }
    
    return (
    <button
        disabled={props.disabled}
        style={style}
        onClick={props.clicked}> {props.children} </button>
    );
};

export default button;