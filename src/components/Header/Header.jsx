import React from 'react';
import style from '../Header/header.module.css'
function Header(props) {
    return (
        <div>
            <div className={style.header}>
                <a href="/">The Meal</a>
            </div>
        </div>
    );
}

export default Header;