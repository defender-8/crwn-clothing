import React from "react";
import './menu-item.style.scss';

function MenuItem({ title, imageUrl, size }) {
    return (
        <div className={`menu-item ${size}`}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className="background-image"
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <div className="subtitle">Shop now</div>
            </div>
        </div>
    );
}

export default MenuItem;
