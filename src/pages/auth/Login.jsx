import React, { createRef, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authApi from '~/api/authApi';
import images from '~/assets/images';
import { keywords } from '~/common/keywords';
import { languages } from '~/common/languages';
import { loginMethods } from '~/common/loginMethods';
import Button from '~/components/common/Button';
import CheckBox from '~/components/common/CheckBox';
import InputLabel from '~/components/common/InputLabel';
import Select from '~/components/common/Select';
import { openDialog } from '~/redux/features/dialogRootSlice';
import { setLanguage, setRememberID } from '~/redux/features/userSlice';

const Login = () => {
    const { t, i18n } = useTranslation();

    const {
        language: languageStore,
        loginMethod: loginMethodStore,
        rememberID: rememberIDStore,
    } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const inputRefs = useRef([createRef(), createRef()]);

    const [account, setAccount] = useState({
        id: '',
        password: '',
    });

    const [loginMethod, setLoginMethod] = useState(() =>
        loginMethods.find((loginMethod) => loginMethod.value === loginMethodStore),
    );

    const [languageState, setLanguageState] = useState(() =>
        languages.find((language) => language.value === languageStore),
    );

    const [rememberIDState, setRememberIDState] = useState(rememberIDStore);

    const idRules = useMemo(() => {
        return [(value) => !!value || 'EnterIdMsg'];
    }, []);

    const passwordRules = useMemo(() => {
        return [(value) => !!value || 'EnterPwMsg'];
    }, []);

    const [loading, setLoading] = useState(false);

    const handleChangeLanguage = (language) => {
        dispatch(setLanguage(language.value));
        setLanguageState(language);
        i18n.changeLanguage(language.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value,
        });
    };

    const handleChangeMethod = (method) => {
        setLoginMethod(method);
    };

    const handleSubmit = () => {
        if (loginMethod.value === 'otp') {
            loginOTP();
        } else if (loginMethod.value === 'sotp') {
            loginSOTP();
        }
        authApi.loginOTP({
            ...account,
            id: account.id.toLowerCase(),
        });
    };

    const loginOTP = () => {
        setLoading(true);
        authApi.loginOTP(account).then((res) => {
            if (res.success) {
                if (res.secucardStatus === keywords.MAX_COUNT_WRONG_SECUCARD_PW_STATUS) {
                    dispatch(
                        openDialog({
                            title: t('Error'),
                            content: t('MaxCountWrongSecucardPw'),
                            defaultClose: true,
                            backdropClose: true,
                        }),
                    );
                } else {
                }
            }
        });
    };

    const loginSOTP = () => {};

    const handleRememberID = (rememberCheckBox) => {
        dispatch(setRememberID(rememberCheckBox.checked));
        setRememberIDState(rememberCheckBox.checked);
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src={images.logo} />
            </div>
            <div className="login__form">
                <div className="login__title">{t('Login')}</div>
                <div className="login__input">
                    <InputLabel
                        ref={inputRefs.current[0]}
                        type="text"
                        label="account"
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
                        label="password"
                        name="password"
                        value={account.password}
                        onChange={handleChange}
                        rules={passwordRules}
                    />
                </div>
                <div className="login__method">
                    <Select
                        label="otpMethod"
                        items={loginMethods}
                        value={loginMethod}
                        itemText="label"
                        onClickOption={handleChangeMethod}
                    />
                </div>
                <div className="login__checkbox">
                    <CheckBox checked={rememberIDState} label="SaveId" onChange={handleRememberID} />
                </div>
                <div className="login__checkbox">
                    <CheckBox label="CertLogin" />
                </div>
                <div className="login__submit">
                    <Button variant="contained" size="large" onClick={handleSubmit}>
                        {t('Login')}
                    </Button>
                </div>
                <div className="login__link-register">
                    <a href="https://nhwts.nhsv.vn/mo-tai-khoan/">{t('registerAccount')}</a>
                </div>
                <div className="login__languages">
                    <Select
                        items={languages}
                        value={languageState}
                        itemText="label"
                        onClickOption={handleChangeLanguage}
                    />
                </div>
            </div>
            <div className="login__forgot-password">
                <Link to="/auth/reset-password">Quên mật khẩu</Link>
            </div>
        </div>
    );
};

export default Login;
