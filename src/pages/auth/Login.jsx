import React, { createRef, useMemo, useRef, useState } from 'react';
import images from '~/assets/images';
import Form from '~/components/common/Form';
import InputLabel from '~/components/common/InputLabel';
import Select from '~/components/common/Select';

const Login = () => {
    const inputRefs = useRef([createRef(), createRef()]);

    const [account, setAccount] = useState({
        username: '',
        password: '',
    });

    const [loginMethod, setLoginMethod] = useState({
        label: 'OTP',
        value: 'otp',
    });

    const usernameRules = useMemo(() => {
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
                        name="username"
                        value={account.username}
                        onChange={handleChange}
                        rules={usernameRules}
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
                        items={loginMethods}
                        value={loginMethod}
                        itemText="label"
                        onClickOption={handleClickOption}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
