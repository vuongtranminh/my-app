import React, { createRef, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import authApi from '~/api/authApi';
import images from '~/assets/images';
import { languages } from '~/common/languages';
import Button from '~/components/common/Button';
import CheckBox from '~/components/common/CheckBox';
import InputLabel from '~/components/common/InputLabel';
import Select from '~/components/common/Select';

const Login = () => {
    const { t, i18n } = useTranslation();

    const inputRefs = useRef([createRef(), createRef()]);

    const [account, setAccount] = useState({
        id: '',
        password: '',
    });

    const [loginMethod, setLoginMethod] = useState({
        label: 'OTP',
        value: 'otp',
    });

    const idRules = useMemo(() => {
        return [
            (value) => !!value || 'Username is not empty!',
            (value) =>
                /^[A-Za-z0-9]{3,16}$/.test(value) ||
                "Username should be 3-16 characters and shouldn't include any special character!",
        ];
    }, []);

    const passwordRules = useMemo(() => {
        return [
            (value) => !!value || 'Username is not empty!',
            (value) =>
                /^[A-Za-z0-9]{3,16}$/.test(value) ||
                "Username should be 3-16 characters and shouldn't include any special character!",
        ];
    }, []);

    const loginMethods = useMemo(() => {
        return [
            {
                label: 'OTP',
                value: 'otp',
            },
            {
                label: 'S-OTP',
                value: 'sotp',
            },
        ];
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value,
        });
    };

    const handleClickOption = (value) => {
        setLoginMethod(value);
    };

    const handleSubmit = () => {
        authApi.loginOTP(account);
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src={images.logo} />
            </div>
            <div className="login__form">
                <div className="login__title">Đăng nhập</div>
                <div className="login__input">
                    <InputLabel
                        ref={inputRefs.current[0]}
                        type="text"
                        label="Tài khoản*"
                        name="id"
                        value={account.id}
                        onChange={handleChange}
                        rules={idRules}
                    />
                </div>
                <div className="login__input">
                    <InputLabel
                        ref={inputRefs.current[1]}
                        type="password"
                        label="Mật khẩu*"
                        name="password"
                        value={account.password}
                        onChange={handleChange}
                        rules={passwordRules}
                    />
                </div>
                <div className="login__method">
                    <Select
                        label="Phương thức xác thực"
                        items={loginMethods}
                        value={loginMethod}
                        itemText="label"
                        onClickOption={handleClickOption}
                    />
                </div>
                <div className="login__checkbox">
                    <CheckBox label="Lưu ID" />
                </div>
                <div className="login__checkbox">
                    <CheckBox label="Cert đăng nhập" />
                </div>
                <div className="login__submit">
                    <Button variant="contained" size="large" onClick={handleSubmit}>
                        {t('login')}
                    </Button>
                </div>
                <div className="login__link-register">
                    <a href="https://nhwts.nhsv.vn/mo-tai-khoan/">Đăng ký mở tài khoản</a>
                </div>
                <div className="login__languages">
                    <Select items={languages} value={loginMethod} itemText="label" onClickOption={handleClickOption} />
                </div>
            </div>
        </div>
    );
};

export default Login;
