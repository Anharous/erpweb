'use client';
import React, { useState } from 'react';
import './loginform.css';
import { useRouter } from 'next/navigation';

interface Credentials {
    username: string;
    password: string;
}

const validCredentials: Credentials[] = [
    { username: 'csbs1', password: 'Rekha' },
    { username: 'csbs2', password: 'geetha' },
];

const LoginPage: React.FC = () => {
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!userId && !password) {
            setError('Username and password are required to login');
            return;
        }

        if (!userId) {
            setError('Username is required');
            return;
        }

        if (!password) {
            setError('Password is required');
            return;
        }

        const user = validCredentials.find((user) => user.username === userId);
        if (!user) {
            setError('Wrong username');
            return;
        }
        if (user.password !== password) {
            setError('Wrong password');
            return;
        }
        setError('');
        localStorage.setItem('username', userId);
        router.push('/Component/Faculty'); 
    };

    return (
        <div className="container">
            <div className="loginpage">
                <div className="loginleft">
                    <div className="login_logo">
                        <img src="/peclogo.png" alt="logo" />
                        <h1>Panimalar Engineering College</h1>
                    </div>
                    <h2>Welcome!</h2>
                    <p>Please log in to access your personalized dashboard.</p>
                </div>
                <div className="loginright">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="user">
                            <label htmlFor="user_id">User ID:</label><br />
                            <input
                                type="text"
                                id="user_id"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password:</label><br />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="button" type="submit">Login</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


