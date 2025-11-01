import React, { useState, useEffect } from "react";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Footer from "../../Layouts/Footer";

function Dashboard({ auth, money, rates }) {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const formattedDate = new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(dateTime);
    const formattedTime = dateTime.toLocaleTimeString();

    const half = Math.ceil(money.length / 2);
    const leftColumn = money.slice(0, half);
    const rightColumn = money.slice(half);

    const CurrencyColumn = ({ data }) => (
        <div>
            {data.map((cur, index) => {
                const bg = index % 2 === 0 ? "#1e40af" : "#2563eb";
                return (
                    <div
                        key={cur.id || index}
                        className="d-flex align-items-center py-2 px-4"
                        style={{
                            backgroundColor: bg,
                            fontSize: "1.2rem",
                            color: "white",
                        }}
                    >
                        <div
                            className="d-flex align-items-center"
                            style={{
                                width: "50%",
                                gap: "10px",
                            }}
                        >
                            <img
                                src={cur.foto}
                                alt={cur.country}
                                style={{ width: 50, height: 30 }}
                            />
                            <span>{cur.country}</span>
                        </div>
                        <div className="text-end" style={{ width: "25%" }}>
                            {cur.buy}
                        </div>
                        <div className="text-end" style={{ width: "25%" }}>
                            {cur.sell}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <>
            <Header user={auth.user} />
            <Sidebar active="dashboard" />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <h1>
                            <a href="/currency" target="_blank">
                                Go To Main Screen
                            </a>
                        </h1>

                        <div
                            className="bg-dark text-white d-flex flex-column align-items-center mt-3"
                            style={{
                                minHeight: "80vh",
                                width: "100%",
                                borderRadius: "10px",
                                overflow: "hidden",
                            }}
                        >
                            {/* HEADER */}
                            <div
                                className="d-flex align-items-center justify-content-center py-3"
                                style={{
                                    backgroundColor: "#000",
                                    width: "100%",
                                    gap: "30px",
                                }}
                            >
                                <img
                                    src="/dist/img/logo.png"
                                    alt="Logo"
                                    style={{ width: 100, height: "auto" }}
                                />
                                <div className="text-start">
                                    <h3
                                        style={{
                                            fontWeight: "bold",
                                            letterSpacing: "2px",
                                            margin: 0,
                                        }}
                                    >
                                        EXCHANGE RATES
                                    </h3>
                                    <div
                                        style={{
                                            fontSize: "1rem",
                                            color: "yellow",
                                            marginTop: 5,
                                        }}
                                    >
                                        {formattedDate} - {formattedTime}
                                    </div>
                                </div>
                            </div>

                            {/* TABEL */}
                            <div
                                className="container-fluid px-4 mt-2 flex-grow-1"
                                style={{
                                    overflowY: "auto",
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "#2563eb #111",
                                }}
                            >
                                <div
                                    className="row text-white fw-bold text-center sticky-top"
                                    style={{
                                        fontSize: "1rem",
                                        backgroundColor: "#111",
                                        zIndex: 10,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                    }}
                                >
                                    <div className="col-6">
                                        <div className="d-flex py-2 px-4 bg-primary rounded-top">
                                            <div
                                                style={{
                                                    width: "50%",
                                                    textAlign: "left",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                CURRENCY
                                            </div>
                                            <div
                                                style={{
                                                    width: "25%",
                                                    textAlign: "left",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                BUY
                                            </div>
                                            <div
                                                style={{
                                                    width: "25%",
                                                    textAlign: "left",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                SELL
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="d-flex py-2 px-4 bg-primary rounded-top">
                                            <div
                                                style={{
                                                    width: "50%",
                                                    textAlign: "left",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                CURRENCY
                                            </div>
                                            <div
                                                style={{
                                                    width: "25%",
                                                    textAlign: "left",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                BUY
                                            </div>
                                            <div
                                                style={{
                                                    width: "25%",
                                                    textAlign: "left",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                SELL
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-1">
                                    <div className="col-6">
                                        <CurrencyColumn data={leftColumn} />
                                    </div>
                                    <div className="col-6">
                                        <CurrencyColumn data={rightColumn} />
                                    </div>
                                </div>
                            </div>

                            {/* FOOTER DALAM DASHBOARD */}
                            <div
                                className="py-2 mt-2 text-center"
                                style={{
                                    backgroundColor: "#000",
                                    width: "100%",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                }}
                            >
                                <marquee>
                                    MUJUR HARTA MULYA MONEY CHANGER - JALAN RAYA
                                    SINGAPADU, SUKAWATI, GIANYAR, BALI.
                                </marquee>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
