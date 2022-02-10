import React from 'react'
import { Link } from 'react-router-dom'


function SignIn() {
    return (<div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="signup-form">
                    <div className="mt-5 border p-4 bg-light shadow">
                        <h4 className="mb-5 text-secondary">Welcome Back</h4>
                        <div className="row">
                            <div className="mb-3 col-md-12">
                                <label>Email<span className="text-danger">*</span></label>
                                <input type="email" name="email" className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label>Password<span className="text-danger">*</span></label>
                                <input type="password" name="password" className="form-control" placeholder="Enter Password" />
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-primary float-end">Signin Now</button>
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