import React from 'react';
import Button from '~/components/common/Button';
import Form from '~/components/common/Form';
// import authApi from '~/api/authApi';
import TextField from '~/components/common/TextField';
import useForm from '~/hooks/useForm';
// import { useFetchData } from '~/hooks';

const Home = () => {
    // const { data: test, isLoading, error } = useFetchData(authApi.posts);

    // const [account, setAccount] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    // });

    const accountInfo = {
        username: {
            initValue: '',
            rules: [
                (value) => !!value || 'Username is not empty!',
                (value) =>
                    /^[A-Za-z0-9]{3,16}$/.test(value) ||
                    "Username should be 3-16 characters and shouldn't include any special character!",
                (value) => value.startsWith('V') || 'Username must be start V',
            ],
        },
        password: {
            initValue: '',
            rules: [
                (value) => !!value || 'Password is not empty!',
                (value) =>
                    /^[A-Za-z0-9]{3,16}$/.test(value) ||
                    "Username should be 3-16 characters and shouldn't include any special character!",
            ],
        },
    };

    const { state: account, handleChange, errors, validate, resetValidation } = useForm(accountInfo);

    const handleSubmit = () => {
        validate();
    };

    const handleReset = () => {
        console.log('reset');
        resetValidation();
    };

    console.log(account);
    console.log(errors);

    return (
        <div>
            <Form name="form-account" onSubmit={handleSubmit}>
                <div style={{ width: '20rem' }}>
                    <TextField
                        type="text"
                        label="Username"
                        name="username"
                        rules={accountInfo.username.rules}
                        value={account.username}
                        onChange={handleChange}
                        error={errors.username}
                        autoComplete="off"
                    />
                </div>
                <div style={{ width: '20rem' }}>
                    <TextField
                        type="password"
                        label="password"
                        name="password"
                        rules={accountInfo.password.rules}
                        value={account.password}
                        onChange={handleChange}
                        error={errors.password}
                        autoComplete="off"
                    />
                </div>
                <Button type="submit">Submit</Button>
                <Button onClick={handleReset}>Reset</Button>
                <div>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Home;
