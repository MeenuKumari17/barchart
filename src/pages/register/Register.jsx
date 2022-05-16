import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss';

function Register() {

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        phone: ""
    })



    // const email = useRef();
    // const password = useRef();
    // const confirmPassword = useRef();
    // const name = useRef();
    // const phone = useRef();
    // const navigate = useNavigate();
    console.log(values);

    const handleClick = (e) => {
        e.preventDefault();


        // if (confirmPassword.current.value !== password.current.value) {
        //     confirmPassword.current.setCustomValidity("Password don't match!")
        // } else {
        //     const user = {

        //         email: email.current.value,
        //         password: password.current.value,

        //     }

        // }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='register'>
            <div className="container">
                <div className="left">
                    <div className="imgContainer">
                        <img src="image/table.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1>Choose a data range</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos autem velit dolore.</p>
                    </div>
                </div>
                <div className="right">
                    <form className="loginBox" onSubmit={handleClick}>

                        <label>Your email address</label>
                        <input
                            required
                            value={values.email}
                            className="loginInput"
                            type="email"
                            name='email'
                            onChange={onChange}
                        />
                        <span>Please enter valid email</span>

                        <label>Your password</label>
                        <input
                            required
                            value={values.password}
                            className="loginInput"
                            type="text"
                            minLength="6"
                            name='password'
                            onChange={onChange}
                            pattern= {`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}

                        />
                        <span>Password should contain special character, number, alphabets.</span>


                        <label>Confirm your password</label>
                        <input
                            required
                            value={values.confirmPassword}
                            className="loginInput"
                            type="text"
                            minLength="6"
                            name='confirmPassword'
                            onChange={onChange}

                            pattern= {values.password}

                        />
                        <span>Incorrect Confirmpassword</span>




                        <label>Your full name</label>
                        <input
                            required
                            value={values.username}
                            className="loginInput"
                            type='text'
                            name='username'
                            onChange={onChange}
                        />
                        


                        <label>Your phone number</label>
                        <input
                            required
                            value={values.phone}
                            className="loginInput"
                            type="text"
                            minLength="10"
                            name='phone'
                            onChange={onChange}
                            pattern={`^[0-9]{10}$`}

                        />
                        <span>Please enter valid phone number</span>

                        <label className='check'> <input type="checkbox" className='checkbox' /> I read and agree Term and Condition</label>

                        <Link to='/barchart' className="loginButton" type='submit'>Create account</Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;