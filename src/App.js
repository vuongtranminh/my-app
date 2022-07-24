import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import AuthLayout from './layout/AuthLayout';
import Board from './pages/Board';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/Signup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="auth/login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="boards" element={<Board />} />
                    <Route path="boards/:boardId" element={<Board />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
