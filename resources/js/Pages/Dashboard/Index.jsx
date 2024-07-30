import React from "react";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Footer from "../../Layouts/Footer";

function Dashboard({auth} ) {

    return (
        <>
            <Header  user={auth.user} />
            <Sidebar active="dashboard"/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                        <a href="/currency" target="_blank">Go To Main Screen </a>
                        <div className="long-logo"></div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
