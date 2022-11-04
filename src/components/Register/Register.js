import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegistration = (event) => {
        event.preventDefault();
        const formData = event.target;
        // const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;

        // Check if password has uppercase letter
        if (!/(?=.*[A-Z])/.test(password)) {
            alert('Password must contain a UpperCase Letter');
            return;
        }
        // Check if password has lowercase letter
        if (!/(?=.*[a-z])/.test(password)) {
            alert('Password must contain a LowerCase Letter');
            return;
        }
        // Check if password has digit letter
        if (!/(?=.*[0-9])/.test(password)) {
            alert('Password must contain a Digit');
            return;
        }

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleRegistration} className='loginForm'>
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
            <button>REGISTER</button>
            <p>Already have an Account? <Link to='/login'>Login!</Link></p>
        </form>
    );
};

export default Register;