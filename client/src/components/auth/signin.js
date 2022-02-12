import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = async e => {
        e.preventDefault()
        if (password !== "" && email !== "") {
            try {
                await Axios.post('http://localhost:7000/user/signin', {
                    email, password
                });
                localStorage.setItem('profile', true)
                //window.location.href = '/post'
            }
            catch (err) {
                alert(err.response.data.message)
            }
        } else {
            alert('Please Provide Password Correctly')
        }
    }

    return (<div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="signup-form">
                    <div className="mt-5 border p-4 bg-light shadow">
                        <h4 className="mb-5 text-secondary">Welcome Back</h4>
                        <div className="row">
                            <div className="mb-3 col-md-12">
                                <label>Email<span className="text-danger">*</span></label>
                                <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value); }} />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label>Password<span className="text-danger">*</span></label>
                                <input type="password" name="password" className="form-control" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value); }} />
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-primary float-end" onClick={login}>Signin Now</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-3 text-secondary">Have not account yet? <Link to='/signup'>Signup</Link></p>
                </div>
            </div>
        </div>
    </div>)

}

export default SignIn