import React from 'react';
import {UserOutlined} from '@ant-design/icons'
import './header.scss';
export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__image">
                {/* TODO ADD MY OWN IMAGE HERE */}
                <UserOutlined className="user-icon"/>
            </div>
            <h1 className="title">Hello I'm Jeremy Guillén.</h1>
            <h2 className="subtitle">I'm a front end developer</h2>
        </header>
    )
}