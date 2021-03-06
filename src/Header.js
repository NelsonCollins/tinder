import { IconButton } from '@material-ui/core';
import { Forum } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className= "header">
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt=""
            />
            <IconButton>
            <Forum fontSize="large" className="header__icon"/>
            </IconButton>
           
            
        </div>
    );
}

export default Header;
