import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/Branding/Innovation Club icon.png'
import { Colors } from '../assets/Colors';

export const Navbar = () => { 
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <style>
                {`  
                    @import url('https://fonts.googleapis.com/css2?family=Anta&display=swap');

                    .active {
                        color: ${Colors.pink};
                    }

                    nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center; 
                    background-color: rgba(28,28,28,0.9);
                    backdrop-filter: blur(5px);
                    border-radius: 0rem 0rem 0.6rem 0.6rem;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    z-index: 10;
                    backdropFilter: "blur(10px)";
                    font-family: "Anta", sans-serif;
                    }

                    nav div {
                        display: flex;
                        align-items: center;
                        font-family: "Anta", sans-serif;
                    }

                    nav .menu {
                            display: flex;
                            position: absolute;
                            top: 1rem;
                            right: 0.5rem;
                            flex-direction: column;
                            justify-content: space-between;
                            width: 2rem;
                            height: 1.5rem;
                            margin: 0.1rem 0;
                    }

                    nav .menu span {
                        height: 0.3rem;
                        width: 100%;
                        background-color: ${Colors.white};
                        border-radius: 0.2rem;
                    }
                    nav img {
                        height: auto;
                        width: 2.5rem;
                        margin: 0.1rem 0.4rem;
                        padding-left: 1rem;
                    }

                    nav .title {
                        font-size: clamp(1rem, 1.4rem, 1.8rem);
                        font-weight: bold;
                        text-decoration: none;
                        color: ${Colors.white};
                        margin: 0.8rem 0.5rem;
                        font-family: "Anta", sans-serif;
                    }

                    nav ul {
                            position: fixed;
                            background-color: rgba(28,28,28,0.9);
                            backdrop-filter: blur(5px);
                            right: 0;
                            top: 2.3rem;
                            display: none;
                            flex-direction: column;
                            width: 20vw;
                            height: 92.5vh;
                            margin-bottom: 0.25rem;
                            padding-left: 0;
                            border-radius: 0.5rem;
                        }

                    nav ul.open {
                        display: flex;
                    }

                    nav ul li {
                        list-style: none;
                        margin: 1.5rem;
                        tact-align: center;
                    }

                    nav ul li a {
                        display: block;
                        border-style: solid;
                        border-color:  rgba(28, 28, 28, 0);
                        border-width: 2px;
                        text-decoration: none;
                        color: ${Colors.white};
                        margin: 0rem 0.5rem;
                        padding: 0.1rem 0.4rem;
                        border-radius: 0.5rem;
                    }

                    @media (orientation:portrait) {
                        nav ul {
                                position: absolute;                                display: none;
                                flex-direction: column;
                                width: 100%;
                                margin-bottom: 0.25rem;
                                margin-left: 0;
                                padding-left: 0;
                            }
                    }

                `}
            </style>
            <nav>
                <div>
                    <img src={logo}></img>
                    <Link to="/" className="title">INNOVATION CLUB</Link>
                </div>
                <ul className={menuOpen ? "open": "close"}>
                    <li>
                        <NavLink to="/" onClick={() => { setMenuOpen(!menuOpen)}} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => { setMenuOpen(!menuOpen) }} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" onClick={() => { setMenuOpen(!menuOpen) }} >Log In</NavLink>
                    </li>
                </ul>
                <div className="menu" onClick={() => { setMenuOpen(!menuOpen) }} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </nav>
        </>
    );
};