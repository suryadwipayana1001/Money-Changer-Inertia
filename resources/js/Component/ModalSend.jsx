import React from "react";
import Modal from "react-bootstrap/Modal";
export default function ModalSend(props) {
    return (
        <>
            <Modal show={props.show} size="md">
                <Modal.Header className="header-modal">
                    <Modal.Title>Kirim Broadcast {props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.body}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-red" onClick={props.close}>
                        Stop
                    </button>
                    {props.loading ? "Menyiapkan data ..." :
                        !props.loadingSend &&
                        <button className="btn btn-dark-blue" onClick={props.handleSend}>
                            Kirim
                        </button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}
