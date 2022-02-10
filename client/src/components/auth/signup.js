import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const registration = async e => {
        e.preventDefault()
        if (password === cpassword) {
            try {
                await Axios.post('http://localhost:7000/user/signup', {
                    name, email, password, mobile
                });
                localStorage.setItem('profile', true)
                //window.location.href = '/signin'
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
                    <div action="" className="mt-5 border p-4 bg-light shadow">
                        <h4 className="mb-5 text-secondary">Create Your Account</h4>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label>Name<span className="text-danger">*</span></label>
                                <input type="text" name="name" className="form-control" placeholder="Enter First Name" onChange={(e) => { setName(e.target.value); }} />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label>Email<span className="text-danger">*</span></label>
                                <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value); }} />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label>Mobile<span className="text-danger">*</span></label>
                                <input type="text" name="mobile" className="form-control" placeholder="Enter Last Name" onChange={(e) => { setMobile(e.target.value); }} />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label>Password<span className="text-danger">*</span></label>
                                <input type="password" name="password" className="form-control" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value); }} />
                            </div>

                            <div className="mb-3 col-md-12">
                                <label>Confirm Password<span className="text-danger">*</span></label>
                                <input type="password" name="confirmpassword" className="form-control" placeholder="Confirm Password" onChange={(e) => { setCpassword(e.target.value); }} />
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-primary float-end" onClick={registration}>Signup Now</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-3 text-secondary">If you have account, Please <Link to="/signin">Login Now</Link></p>
                </div>
            </div>
        </div>
    </div>)

}

export default SignUp