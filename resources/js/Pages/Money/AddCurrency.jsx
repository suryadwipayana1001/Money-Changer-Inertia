import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';

function AddCurrency({ auth }) {
    const { errors } = usePage().props;
    const [foto, setFoto] = useState(null);
    const [country, setCountry] = useState('');
    const [buy, setBuy] = useState('');
    const [sell, setSell] = useState('');

    const storeCurrency = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('foto', foto);
        formData.append('country', country);
        formData.append('buy', buy);
        formData.append('sell', sell);

        Inertia.post('/money', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    return (
        <>
            <Header user={auth.user} />
            <Sidebar active="money" isSubMenuOpen={true} level={auth.user.level} />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add Money</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Form Add Money</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Country Foto</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) => setFoto(e.target.files[0])}
                                        />
                                        {errors.foto && (
                                            <div className="alert alert-danger">
                                                {errors.foto}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Country Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            placeholder="Country Name"
                                        />
                                        {errors.country && (
                                            <div className="alert alert-danger">
                                                {errors.country}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Buy</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={buy}
                                            onChange={(e) => setBuy(e.target.value)}
                                            placeholder="Buy"
                                        />
                                        {errors.buy && (
                                            <div className="alert alert-danger">
                                                {errors.buy}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label>Sell</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={sell}
                                            onChange={(e) => setSell(e.target.value)}
                                            placeholder="Sell"
                                        />
                                        {errors.sell && (
                                            <div className="alert alert-danger">
                                                {errors.sell}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col d-flex justify-content-end">
                                        <button onClick={() => window.history.back()} className="btn btn-danger mr-3">Back</button>
                                        <button onClick={storeCurrency} className="btn btn-dark-blue mr-3">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AddCurrency;
