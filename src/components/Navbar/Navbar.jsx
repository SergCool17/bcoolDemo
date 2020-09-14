import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={s.navb}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.active} >Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>

        </nav>
    )
};
export default Navbar;