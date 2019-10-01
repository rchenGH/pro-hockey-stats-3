import React, {Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './auth.css';

const Login = ({ login, isAuthenticated }) => {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e =>  
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect if logged in
    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <Container className="auth-container">
                <Row className="auth-row">
                    <Col className="auth-col-form">
                        <h1 className="account-header">SIGN IN </h1>
                        <p className="account-text"><i>Sign Into Your Account</i></p>
                        <form onSubmit={e => onSubmit(e)}>
                            <div>
                                <input  
                                    className="form-input"
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
                                    className="form-input"
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value={password}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                />
                            </div>
                            <input 
                                className="form-input-button"
                                type='submit' 
                                value='Login' 
                            />
                            <p className="account-text">
                                Don't have an account? <Link to="/register" className="sign-link">Sign Up</Link>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);

