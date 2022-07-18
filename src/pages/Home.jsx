import React, { createRef, useRef, useState } from 'react';
import Button from '~/components/common/Button';
import Form from '~/components/common/Form';
import Table from '~/components/common/Table';
import TableBody from '~/components/common/TableBody';
import TableCell from '~/components/common/TableCell';
import TableHead from '~/components/common/TableHead';
import TableRow from '~/components/common/TableRow';
// import authApi from '~/api/authApi';
import TextField from '~/components/common/TextField';
// import { useFetchData } from '~/hooks';
import data from '~/assets/fakedata/db.json';
import Autocomplete from '~/components/common/Autocomplete';

const Home = () => {
    // const { data: test, isLoading, error } = useFetchData(authApi.posts);

    const inputRefs = useRef([createRef(), createRef()]);

    const [account, setAccount] = useState({});

    const createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein };
    };

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const accountInfo = {
        username: {
            rules: [
                (value) => !!value || 'Username is not empty!',
                (value) =>
                    /^[A-Za-z0-9]{3,16}$/.test(value) ||
                    "Username should be 3-16 characters and shouldn't include any special character!",
                (value) => value.startsWith('V') || 'Username must be start V',
            ],
        },
        password: {
            rules: [
                (value) => !!value || 'Password is not empty!',
                (value) =>
                    /^[A-Za-z0-9]{3,16}$/.test(value) ||
                    "Username should be 3-16 characters and shouldn't include any special character!",
            ],
        },
    };

    const handleChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        let isValid = true;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate();
            if (!valid) {
                isValid = false;
            }
        }

        if (!isValid) {
            return;
        }

        console.log('login');
        console.log(account);
        //Carry on as normal
    };

    console.log(account);

    return (
        <div>
            <Form name="form-account" onSubmit={handleSubmit}>
                <div style={{ width: '20rem' }}>
                    <TextField
                        ref={inputRefs.current[0]}
                        type="text"
                        label="Username"
                        name="username"
                        rules={accountInfo.username.rules}
                        // value={account.username}
                        onChange={handleChange}
                        // error={errors.username}
                        autoComplete="off"
                    />
                </div>
                <div style={{ width: '20rem' }}>
                    <TextField
                        ref={inputRefs.current[1]}
                        type="password"
                        label="password"
                        name="password"
                        rules={accountInfo.password.rules}
                        // value={account.password}
                        onChange={handleChange}
                        // error={errors.password}
                        autoComplete="off"
                    />
                </div>
                <Button type="submit">Submit</Button>
                {/* <Button onClick={handleReset}>Reset</Button> */}
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

            <div style={{ marginTop: '30px', width: '50%' }}>
                <Table stickyHeader style={{ maxHeight: '100px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell component="th">Dessert (100g serving)</TableCell>
                            <TableCell component="th" align="right">
                                Calories
                            </TableCell>
                            <TableCell component="th" align="right">
                                Fat&nbsp;(g)
                            </TableCell>
                            <TableCell component="th" align="right">
                                Carbs&nbsp;(g)
                            </TableCell>
                            <TableCell component="th" align="right">
                                Protein&nbsp;(g)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th">{row.name}</TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div style={{ marginTop: '30px', width: '50%' }}>
                <Autocomplete data={data} />
            </div>
        </div>
    );
};

export default Home;
