import React from 'react';
import './Shop.css';

const Shop = () => {
    return (
        <div className="kartu">
            <div className="card-image"></div>
            <div className="card-text">
                <span className="date">4 days ago</span>
                <h2>Post One</h2>
                <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">read</div>
                </div>
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">views</div>
                </div>
                <div className="stat">
                    <div className="value">32</div>
                    <div className="type">comments</div>
                </div>
            </div>
        </div>
    )
}

export default Shop
