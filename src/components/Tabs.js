import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index, callback) => {
    setActiveIndex(index);
    if (callback) {
        callback();
    }
    };

    return (
    <div className="tabs-container">
        <div className="tab-headers">
        {items.map((item, index) => (
            <button
            key={index}
            className={`tab-header ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleTabClick(index, item.callback)}
            >
            {item.label}
            </button>
        ))}
        </div>
        <div className="tab-content">
        <div className="content" key={activeIndex}> {items[activeIndex].content}
        </div>
        </div>
    </div>
    );
};

export default Tabs;
