import React from "react";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Footer from "../../Layouts/Footer";

function Dashboard({ auth,money,rates}) {

    return (
        <>
            <Header user={auth.user} />
            <Sidebar active="dashboard" />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                        <a href="/currency" target="_blank">Go To Main Screen </a>
                        <>
                            <div className="container-fluid ">
                                <div className="m-1">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6 bg-title-dashboard">
                                                    <div className="row">
                                                        <div className="col-5 currency-title-dashboard">CURRENCY</div>
                                                        <div className="col-3 title-dashboard">BUY</div>
                                                        <div className="col-3 title-dashboard">SELL</div>
                                                    </div>
                                                </div>
                                                <div className="col-6 bg-title-dashboard">
                                                    <div className="row ">
                                                        <div className="col-5 currency-title-dashboard">CURRENCY</div>
                                                        <div className="col-3 title-dashboard">BUY</div>
                                                        <div className="col-3 title-dashboard">SELL</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                {money.map((cur, index) => {
                                                    // Menentukan kelas background berdasarkan indeks
                                                    const bgClass = (Math.floor(index / 2) % 2 === 0) ? 'bg-1-dashboard' : 'bg-2-dashboard';
                                                    return (
                                                        <div key={cur.id || index} className={`col-6 mt-1 ${bgClass}`}>
                                                            <div className="row">
                                                                <div className="col-5 row">
                                                                    <div className="col4 center-content ml-3">  <img src={cur.foto} alt="Foto" style={{ width: '60px', height: '35px' }} /></div>
                                                                    <div className="col8 center-content"> <span> &nbsp;&nbsp;{cur.country}</span></div>
                                                                </div>
                                                                <div className="col-3 text">{cur.buy}</div>
                                                                <div className="col-3 text">{cur.sell}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="footer mt-2">
                                <marquee>
                                    <span className="marquee-text">MUJUR HARTA MULYA MONEY CHANGER JALAN RAYA SINGAPADU, SINGAPADU TENGAH, KECAMATAN SUKAWATI, KABUPATEN GIANYAR,BALI.</span>
                                </marquee>
                            </div>
                        </>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
