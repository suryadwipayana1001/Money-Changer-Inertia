import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import ModalEditRegister from "../Pages/Auth/ModalEdit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Header({ user}) {
    const [showEdit,setShowEdit]= useState(false);
    const handleLogout = (event) => {
        event.preventDefault();
        Inertia.post('/logout');
    };
    return (
        <>
        <ModalEditRegister show={showEdit} data={user} close={()=>setShowEdit(false)}/>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto" onClick={()=>setShowEdit(true)}>
                <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                        Hallo {user.name}
                    </a>
                </li>
            </ul>
            <form onSubmit={handleLogout}>
                <button type="submit" className="nav-link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Logout</button>
            </form>
        </nav>
        </>

    );
}

export default Header;
