import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from 'react';

export default function DeleteUser(props) {
    return (
        <>
            <Modal show={props.showModal} size="md">
                <Modal.Header className="header-modal">
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete: {props.nama}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-orange" onClick={props.close}>
                        No
                    </button>
                    <button className="btn btn-red " onClick={props.submit}>
                        Yes
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
