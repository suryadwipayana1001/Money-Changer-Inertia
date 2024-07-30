import React, { useState } from "react";
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function ModalEditRegister(props) {
    const data = props.data;
    const { errors } = usePage().props;
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = () => {
        Inertia.put(`/user/${data.id}`, {
            name:name,
            email:email,
            password:password,
            password_confirmation: passwordConfirmation,
        });
    };

    return (
        <>
            <Modal show={props.show} size="md">
                <Modal.Header className="header-modal">
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Nama Lengkap</label>
                                <input type="text" value={name}className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Nama Lengkap" />
                                {errors.name && (
                                    <div className="alert alert-danger">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email " />
                                {errors.email && (
                                    <div className="alert alert-danger">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label >Password Baru</label>
                                <div className="d-flex align-items-center">
                                    <input  value={password} type={showPassword ? "text" : "password"} className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    <span className={showPassword ? "far fa-eye-slash nav-icon ml-5" : "far fa-eye nav-icon ml-5"} onClick={() => setShowPassword(!showPassword)}></span>
                                </div>
                                {errors.password && (
                                    <div className="alert alert-danger">
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Konfirmasi Password Baru</label>
                                <div className="d-flex align-items-center">
                                    <input type={showConfirmPassword ? "text" : "password"} className="form-control me-2" onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Konfirmasi Password" />
                                    <span className={showConfirmPassword ? "far fa-eye-slash nav-icon ml-5" : "far fa-eye nav-icon ml-5"} onClick={() => setShowConfirmPassword(!showConfirmPassword)}></span>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-red" onClick={props.close}>
                            Batal
                        </button>
                        <button className="btn btn-dark-blue" variant="success" type="submit">
                            Kirim
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}
export default ModalEditRegister;
