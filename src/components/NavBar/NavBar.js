import React from 'react';
import Styles from './NavBar.module.css';

const NavBar = () => {
    return (
            <div class={Styles.topnav} id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" class={Styles.icon} onclick="myFunction()">
                    <i class={Styles.fa}></i>
                </a>
            </div>
    );
}

export default NavBar;