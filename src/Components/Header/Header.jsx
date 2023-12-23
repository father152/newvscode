import React from 'react';
import piclogo from "../Image/header/icon.jpg"



function Header() {
    return (
        <div className='header'>
        <div className='logo'>
            <img src={piclogo} alt="picture"></img>
        </div>
            <h1>WELCOME !</h1>
        </div>
    );
}

export  {Header};