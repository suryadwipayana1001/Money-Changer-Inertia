import React, { useState, useEffect } from 'react';

function Currency({ money, rates }) {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(dateTime);
    const formattedTime = dateTime.toLocaleTimeString();
    return (
        <>
            <div className="container-fluid ">
                <div className="m-1">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-6 bg-title">
                                    <div className="row">
                                        <div className="col-5 currency-title">CURRENCY</div>
                                        <div className="col-3 title">BUY</div>
                                        <div className="col-3 title">SELL</div>
                                    </div>
                                </div>
                                <div className="col-6 bg-title">
                                    <div className="row ">
                                        <div className="col-5 currency-title">CURRENCY</div>
                                        <div className="col-3 title">BUY</div>
                                        <div className="col-3 title">SELL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                {money.map((cur, index) => {
                                    // Menentukan kelas background berdasarkan indeks
                                    const bgClass = (Math.floor(index / 2) % 2 === 0) ? 'bg-1' : 'bg-2';
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
                        <div className="col-4">
                            {/* <img src="/dist/img/long logo.jpg" width={410} alt="Logo" /> */}
                            <center style={{ backgroundColor: 'white', paddingTop: 15, paddingBottom: 15 }}> <img src="/dist/img/logo.png" width={250} alt="Logo" /></center>
                            <div className='mt-3'>
                                <div style={{fontSize:20, fontWeight:'bold', color:'white'}}>RATE TODAY </div>
                               <div  style={{fontSize:18, fontWeight:'bold', color:'white'}}> {formattedDate} {formattedTime}</div>
                                {/* {rates.map((cur, index) => (
                                    <div key={index}><span style={{color:'white', fontSize:17, fontWeight:'bold'}}>{cur.name} = {cur.value}</span></div>
                                ))} */}
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
    );
}

export default Currency;
