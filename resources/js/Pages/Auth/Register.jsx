import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
function Register({auth}) {
    const { errors } = usePage().props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const storeRegister = async (e) => {

        e.preventDefault();
        Inertia.post('/register', {
            name: name,
            email: email,
            password: password,

            password_confirmation: passwordConfirmation
        });
    }

    return (
        <>
            <Header user={auth.user} />
            <Sidebar  active="user"/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Register</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Register Form</h3>
                                </div>
                                {/* <form onSubmit={storeRegister}> */}
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                            {errors.name && (
                                                <div className="alert alert-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email " />
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label >Password</label>
                                            <div className="d-flex align-items-center">
                                                <input type={showPassword ? "text" : "password"} className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                                <span className={showPassword ?  "far fa-eye-slash nav-icon ml-5" : "far fa-eye nav-icon ml-5"} onClick={() => setShowPassword(!showPassword)}></span>
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <div className="d-flex align-items-center">
                                                <input type={showConfirmPassword ? "text" : "password"} className="form-control me-2" onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" />
                                                <span className={showConfirmPassword ?  "far fa-eye-slash nav-icon ml-5" : "far fa-eye nav-icon ml-5"} onClick={() => setShowConfirmPassword(!showConfirmPassword)}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col d-flex justify-content-end">
                                            <button onClick={() => window.history.back()} className="btn btn-danger mr-3">Back</button>
                                            <button onClick={storeRegister}className="btn btn-dark-blue mr-3">Register</button>
                                        </div>
                                    </div>
                                {/* </form> */}

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )

}

export default Register
