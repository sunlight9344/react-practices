import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            {
            //*
                <ul>
                    <li>
                        <NavLink to={'/'}>[main]</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/gallery'}>[gallery]</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/guestbook'}>[guestbook]</NavLink>
                    </li>
                </ul>
            /*/
                <ul>
                    <li>
                        <Link to={'/'}>[main]</Link>
                    </li>
                    <li>
                        <Link to={'/gallery'}>[gallery]</Link>
                    </li>
                    <li>
                        <Link to={'/guestbook'}>[guestbook]</Link>
                    </li>
                </ul>
            //*/
        }   
        </div>
    );
}