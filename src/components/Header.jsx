import React, { useState } from "react";
import './styles/header.css'
export default function Header(props) {
    const active = props.active;
    

    return (
        <>
            <div className="nav-cont">
                <div className="nav-bar">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <a className={active==='home'?"nav-items active":"nav-items"} href="/">Home</a>
                        </li>
                        <li className="nav-list-item">
                            <a  className={active==='project'?"nav-items active":"nav-items"} href="/">Projects</a>
                        </li>
                        <li className="nav-list-item">
                            <a  className={active==='work'?"nav-items active":"nav-items"} href="/">Work</a>
                        </li>
                        <li className="nav-list-item">
                            <a className={active==='about'?"nav-items active":"nav-items"} href="/">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}