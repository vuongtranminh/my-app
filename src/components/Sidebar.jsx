import React, { useState } from 'react';
import images from '~/assets/images';

const Sidebar = () => {
    const [closeNav, setCloseNav] = useState(true);

    const handleToggle = () => {
        setCloseNav(!closeNav);
    };

    return (
        <nav className={`sidebar ${closeNav && 'close'}`}>
            <header>
                <div className="sidebar__logo">
                    <span className="sidebar__logo__image">
                        <img src={images.logo} alt="" />
                    </span>

                    <div className="sidebar__text sidebar__logo__text">
                        <span className="name">Codinglab</span>
                        <span className="profession">Web developer</span>
                    </div>
                </div>

                <span className="sidebar__toggle" onClick={handleToggle}>
                    <i className={`bx bx-chevron-${closeNav ? 'left' : 'right'}`}></i>
                </span>
            </header>

            <div className="sidebar__menu-bar">
                <div className="sidebar__menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-home-alt sidebar__icon"></i>
                                <span className="sidebar__text">Dashboard</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-bar-chart-alt-2 sidebar__icon"></i>
                                <span className="sidebar__text">Revenue</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-bell sidebar__icon"></i>
                                <span className="sidebar__text">Notifications</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-pie-chart-alt sidebar__icon"></i>
                                <span className="sidebar__text">Analytics</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-heart sidebar__icon"></i>
                                <span className="sidebar__text">Likes</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-wallet sidebar__icon"></i>
                                <span className="sidebar__text">Wallets</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="">
                        <a href="#">
                            <i className="bx bx-log-out sidebar__icon"></i>
                            <span className="sidebar__text">Logout</span>
                        </a>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
