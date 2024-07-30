import React from "react";
export default function LoadingSend(props) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden"></span>
                </div>

                <div className="spinner-grow text-dark" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">Mengirim Pesan {props.dari}/{props.sampai}</div>
        </>
    );
}
