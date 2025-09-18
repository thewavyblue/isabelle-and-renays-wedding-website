import React from "react";
import './Divider.css';
import florish from './img/florish.svg';

export default function Divider() {
    return (
        <div className="divider">
            <img src={florish} alt="" />
        </div>
    )
}