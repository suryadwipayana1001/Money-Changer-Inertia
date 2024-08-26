import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
import { Inertia } from '@inertiajs/inertia';
import DeleteCurrency from './DeleteCurrency';

export default function CurrencyIndex({ auth, money }) {
    const [showModal, setShowModal] = useState(false);
    const [idCurrency, setIdCurrency] = useState(null);
    const [country, setCountry] = useState(null);

    const handleShowModal = (id, country) => {
        setIdCurrency(id);
        setCountry(country);
        setShowModal(true);
    };

    const handleEdit = (id) => {
        Inertia.get(`/money/${id}/edit`);
    }
    // // Method to delete a user
    // const deleteCurrency = async (id) => {
    //     Inertia.delete(`/money/${id}`);
    //     setShowModal(false); // Close modal after delete
    // };

    const [loadingId, setLoadingId] = useState(null);

    const deleteCurrency = async (id) => {
        setLoadingId(id); // Set loading id saat proses hapus dimulai
        try {
            await Inertia.delete(`/money/${id}`);
            setShowModal(false); // Tutup modal setelah menghapus
        } catch (error) {
            console.error("Delete failed: ", error);
        } finally {
            setLoadingId(null); // Reset loading id setelah selesai
        }
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
            <DeleteCurrency showModal={showModal} close={() => setShowModal(false)} submit={() => deleteCurrency(idCurrency)} country={country} />
            <Header user={auth.user} />
            <Sidebar active="money" isSubMenuOpen={true} level={auth.user.level} />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Money</h1>
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
                                        <a href="/money/create" className="btn btn-dark-blue btn-md mb-3">Add Money</a>
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Country</th>
                                                    <th>Buy</th>
                                                    <th>Sell</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {money.map((cur, index) => (
                                                    <tr key={cur.id}>
                                                        <td><img src={cur.foto} alt="Foto" style={{ width: '100px', height: 'auto' }} /> {cur.country}</td>
                                                        <td>{cur.buy}</td>
                                                        <td>{cur.sell}</td>
                                                        <td>
                                                            <button onClick={() => handleEdit(cur.id)} className="btn btn-sm btn-dark-blue">Edit</button>
                                                            <button
                                                                onClick={() => handleShowModal(cur.id, cur.country)}
                                                                className="btn btn-sm btn-red ml-2"
                                                                disabled={loadingId === cur.id}
                                                            >
                                                                {loadingId === cur.id ? 'Deleting...' : 'Delete'}
                                                            </button>
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
