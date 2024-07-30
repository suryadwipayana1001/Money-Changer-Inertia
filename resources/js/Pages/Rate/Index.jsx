import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
import { Inertia } from '@inertiajs/inertia';
import DeleteRate from './DeleteRate';
// import DeleteCurrency from './DeleteCurrency';

export default function CurrencyIndex({ auth, rates }) {
    const [showModal, setShowModal] = useState(false);
    const [idRate, setIdRate] = useState(null);
    const [name, setName] = useState(null);

    const handleShowModal = (id, name) => {
        setIdRate(id);
        setName(name);
        setShowModal(true);
    };

    const handleEdit=(id)=>{
        Inertia.get(`/rate/${id}/edit`);
    }
    // Method to delete a user
    const deleteCurrency = async (id) => {
        Inertia.delete(`/rate/${id}`);
        setShowModal(false); // Close modal after delete
    };

    useEffect(() => {
        if (window.$) {
            $(function () {
                $("#example1").DataTable({
                    "responsive": true,
                    "lengthChange": false,
                    "autoWidth": false,
                }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
                $('#example2').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });
            });
        } else {
            console.error("jQuery belum dimuat, pastikan Anda telah memuatnya sebelum menambahkan kode ini.");
        }
    }, []);

    return (
        <>
            <DeleteRate showModal={showModal} close={() => setShowModal(false)} submit={() => deleteCurrency(idRate)} name={name} />
            <Header user={auth.user} />
            <Sidebar active="rate" isSubMenuOpen={true} level={auth.user.level} />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Rate</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="/rate/create" className="btn btn-dark-blue btn-md mb-3">Add Rate</a>
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Value</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rates.map((cur, index) => (
                                                    <tr key={index}>
                                                        <td>{cur.name}</td>
                                                        <td>{cur.value}</td>
                                                            <td>
                                                                 <button onClick={() => handleEdit(cur.id)} className="btn btn-sm btn-dark-blue">Edit</button>
                                                                 <button onClick={() => handleShowModal(cur.id, cur.name)} className="btn btn-sm btn-red ml-2">Delete</button>
                                                            </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
