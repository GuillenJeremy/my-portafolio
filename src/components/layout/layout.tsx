import React from 'react';
import './layout.scss';
import "antd/dist/antd.css";

const Layout: React.FC = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout;