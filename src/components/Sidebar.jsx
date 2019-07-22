import React from 'react';

const Sidebar = ({ children }) => (
    <div className="Sidebar">
        <div className="Sidebar__container">
            {children}
        </div>
    </div>
);
export default Sidebar;