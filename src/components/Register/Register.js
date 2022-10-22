import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <form className='loginForm'>
            <h1>Register Here</h1>
            <div>
                <label htmlFor="name">Your Name</label>
                <br />
                <input type="name" name="name" />
            </div>
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
            <p>Already have an Account? <Link to='/login'>Login!</Link></p>
        </form>
    );
};

export default Register;