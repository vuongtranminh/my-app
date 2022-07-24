import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import images from '~/assets/images';
import sideBar from '~/common/sidebar';

const Sidebar = () => {
    const [closeNav, setCloseNav] = useState(true);

    const handleToggle = () => {
        setCloseNav(!closeNav);
    };

    return (
        <nav class={`sidebar ${closeNav && 'close'}`}>
            <header>
                <div class="image-text">
                    <span class="image">
                        <img src={images.logoMini} alt="" />
                    </span>

                    <div class="text logo-text">
                        <img src={images.logoCut} alt="" />
                    </div>
                </div>

                <i class={`bx bx-chevron-${closeNav ? 'right' : 'left'} toggle`} onClick={handleToggle}></i>
            </header>
            <ul class="nav-links">
                {sideBar.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
                <li>
                    <div class="profile-details">
                        <div class="profile-content">
                            <img src="image/profile.jpg" alt="profileImg" />
                        </div>
                        <div class="name-job">
                            <div class="profile_name">Prem Shahi</div>
                            <div class="job">Web Desginer</div>
                        </div>
                        <i class="bx bx-log-out"></i>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

const SidebarItem = ({ item }) => {
    const [isShowSub, setIsShowSub] = useState(false);

    const handleShowSub = () => {
        setIsShowSub(!isShowSub);
    };
    if (item.subs) {
        return (
            <li className={isShowSub && 'showMenu'}>
                <div class="iocn-link" onClick={handleShowSub}>
                    <a href="#">
                        <i class="bx bx-plug"></i>
                        <span class="link_name">{item.displayName}</span>
                    </a>
                    <i class="bx bxs-chevron-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li>
                        <a class="link_name" href="#">
                            {item.displayName}
                        </a>
                    </li>
                    {item.subs.map((sub, index) => (
                        <li>
                            <a key={index} href="#">
                                {sub.displayName}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        );
    }

    return (
        <li>
            <a href="#">
                <i class="bx bx-compass"></i>
                <span class="link_name">{item.displayName}</span>
            </a>
            <ul class="sub-menu blank">
                <li>
                    <a class="link_name" href="#">
                        {item.displayName}
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default Sidebar;
