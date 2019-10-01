import React, {Fragment, useState} from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import './auth.css';

const Register = ( {setAlert, register, isAuthenticated} ) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
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

    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }


    return (
        <Fragment>
            <Container className="auth-container">
                <Row className="auth-row">
                    <Col className="auth-col-form">
                        <h1 className="account-header">SIGN UP</h1>
                        <p className="account-text"><i>Create Your Account</i></p>
                        <form onSubmit={e => onSubmit(e)}>
                            <div>
                                <input
                                    className="form-input"
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
                                    className="form-input"
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
                                    className="form-input"
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
                                    className="form-input"
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='password2'
                                    value={password2}
                                    onChange={e => onChange(e)}
                                    // minLength='6'
                                />
                            </div>
                            <input 
                                className="form-input-button"
                                type='submit' 
                                value='Register' 
                            />
                            <p className="account-text">
                                Already have an account? <Link to="/login" className="sign-link">Sign In </Link>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, {setAlert, register})(Register)
