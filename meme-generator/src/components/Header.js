import React from "react";
import reactLogo from "./images/troll-face.png";

export default function Header() {
    return (
        <header className="header">
            <img src={reactLogo} alt="toll" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React component</h4>
        </header>
    )
}