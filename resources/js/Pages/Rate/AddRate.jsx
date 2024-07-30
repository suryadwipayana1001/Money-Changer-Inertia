import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';

function AddRate({ auth }) {
    const { errors } = usePage().props;
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const storeRate = async (e) => {
        e.preventDefault();
        Inertia.post('/rate', {
            name: name,
            value: value,
        });
    }

    return (
        <>
            <Header user={auth.user} />
            <Sidebar active="rate" isSubMenuOpen={true} level={auth.user.level} />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add Rate</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Form Add Rate</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Name"
                                        />
                                        {errors.name && (
                                            <div className="alert alert-danger">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Value</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Value"
                                        />
                                        {errors.value && (
                                            <div className="alert alert-danger">
                                                {errors.value}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col d-flex justify-content-end">
                                        <button onClick={() => window.history.back()} className="btn btn-danger mr-3">Back</button>
                                        <button onClick={storeRate} className="btn btn-dark-blue mr-3">Add</button>
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

export default AddRate;
