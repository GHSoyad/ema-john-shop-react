import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <form className='loginForm'>
            <h1>Login Here</h1>
            <div>
                <label htmlFor="email">Your Email</label>
                <br />
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Your Password</label>
                <br />
                <input type="password" name="password" />
            </div>
            <button>Login</button>
            <p>Don't have an Account? <Link to='/register'>Register!</Link></p>
        </form>
    );
};

export default Login;