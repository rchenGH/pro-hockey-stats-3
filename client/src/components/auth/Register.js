import React, {Fragment, useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


const Register = ( {setAlert, register} ) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e =>  
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'danger', 4000)
        } else {
            register({name, email, password})
        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <p><i>Create Your Account</i></p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input 
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        // required
                    />
                </div>
                <div>
                    <input  
                        type='email' 
                        placeholder='Email Address' 
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        // required
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        // minLength='6'
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={e => onChange(e)}
                        // minLength='6'
                    />
                </div>
                <input type='submit' value='Register' />>
                <p>
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </form>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
}

export default connect(null, {setAlert, register})(Register)