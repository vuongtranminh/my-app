import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import images from '~/assets/images';
import { setMode } from '~/redux/features/themeSlice';
import Button from './common/Button';
import IconButton from './common/IconButton';

const TopNav = () => {
    const theme = useSelector((state) => state.themeMode.theme);

    const [isLightTheme, setIsLightTheme] = useState(() => {
        return theme === 'theme-mode-dark' ? false : true;
    });

    const dispatch = useDispatch();

    const handleChangeThemeMode = () => {
        console.log('click');
        setIsLightTheme(!isLightTheme);

        if (!isLightTheme) {
            dispatch(setMode('theme-mode-light'));
        } else {
            dispatch(setMode('theme-mode-dark'));
        }
    };

    return (
        <header className="top-nav">
            <div className="top-nav__time">
                <i className="bx bxs-time"></i>
                01/01/2020 - 15:00:00
            </div>
            <div className="top-nav__market">
                <div className="top-nav__market__item">HNX: Khớp liên tục</div>
                <div className="top-nav__market__item">HNX: Khớp liên tục</div>
                <div className="top-nav__market__item">HNX: Khớp liên tục</div>
            </div>
            <div className="top-nav__actions">
                <div className="top-nav__buttons">
                    <div className="top-nav__button top-nav__button--quick">
                        <Button variant="contained">
                            <i className="bx bxs-zap"></i>
                            Lệnh nhanh
                        </Button>
                    </div>
                    <div className="top-nav__button">
                        <IconButton full onClick={handleChangeThemeMode}>
                            {isLightTheme ? <i className="bx bxs-sun"></i> : <i className="bx bxs-moon"></i>}
                        </IconButton>
                    </div>
                    <div className="top-nav__button">
                        <IconButton full>
                            <img src={images.vi} />
                        </IconButton>
                    </div>
                    <div className="top-nav__button">
                        <IconButton full>
                            <i className="bx bxs-bell"></i>
                        </IconButton>
                    </div>
                </div>
                <div className="top-nav__account">
                    <i className="bx bx-user-circle"></i>
                    <span className="button__account--master">069c120996</span>
                    <span>-</span>
                    <span className="button__account--sub">00</span>
                </div>
            </div>
        </header>
    );
};

export default TopNav;
