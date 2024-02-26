import React from "react";
import './display.css';

export default function Display({currentAudio}){
    return(
        <div id="display">
            <h2 className="display-title">{currentAudio}</h2>
        </div>
    )
};