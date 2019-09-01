import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setAlert }) => {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e =>  
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        console.log('Success')
    }
    return (
        <div>
            <h1>Sign In</h1>
            <p><i>Sign Into Your Account</i></p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input  
                        type='email' 
                        placeholder='Email Address' 
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <input type='submit' value='Login' />
                <p>
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default Login