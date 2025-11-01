import React, { useState, useEffect } from "react";

function Currency({ money, rates }) {
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

    // === Komponen item untuk 1 kolom (kiri/kanan) ===
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
                            fontSize: "1.5rem",
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
                                style={{ width: 60, height: 35 }}
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
        <div
            className="bg-dark text-white d-flex flex-column align-items-center"
            style={{
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
            }}
        >
            {/* ===== HEADER ===== */}
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
                    style={{ width: 120, height: "auto" }}
                />
                <div className="text-start">
                    <h2
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            margin: 0,
                        }}
                    >
                        EXCHANGE RATES
                    </h2>
                    <div
                        style={{
                            fontSize: "1.6rem",
                            color: "yellow",
                            marginTop: 5,
                        }}
                    >
                        {formattedDate} - {formattedTime}
                    </div>
                </div>
            </div>

            {/* ===== TABEL ===== */}
            <div
                className="container-fluid px-5 mt-2 flex-grow-1"
                style={{
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#2563eb #111",
                }}
            >
                {/* Header tabel */}
                <div
                    className="row text-white fw-bold text-center sticky-top"
                    style={{
                        fontSize: "1.5rem",
                        backgroundColor: "#111",
                        zIndex: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                >
                    <div className="col-6">
                        <div className="d-flex py-2 px-4 bg-primary rounded-top">
                            <div style={{ width: "50%", textAlign: "left", fontWeight:"bold" }}>
                                CURRENCY
                            </div>
                            <div style={{ width: "25%", textAlign: "left", fontWeight:"bold" }}>BUY</div>
                            <div style={{ width: "25%", textAlign: "left", fontWeight:"bold" }}>SELL</div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="d-flex py-2 px-4 bg-primary rounded-top">
                            <div style={{ width: "50%", textAlign: "left", fontWeight:"bold" }}>
                                CURRENCY
                            </div>
                            <div style={{ width: "25%", textAlign: "left", fontWeight:"bold" }}>BUY</div>
                            <div style={{ width: "25%", textAlign: "left" , fontWeight:"bold"}}>SELL</div>
                        </div>
                    </div>
                </div>

                {/* Isi tabel */}
                <div className="row mt-1">
                    <div className="col-6">
                        <CurrencyColumn data={leftColumn} />
                    </div>
                    <div className="col-6">
                        <CurrencyColumn data={rightColumn} />
                    </div>
                </div>
            </div>

            {/* ===== FOOTER ===== */}
            <div
                className="py-2 mt-2 text-center"
                style={{
                    backgroundColor: "#000",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                }}
            >
                <marquee>
                    MUJUR HARTA MULYA MONEY CHANGER JALAN RAYA SINGAPADU, SINGAPADU
                    TENGAH, SUKAWATI, GIANYAR, BALI.
                </marquee>
            </div>
        </div>
    );
}

export default Currency;
