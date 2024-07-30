import React, { useState, useEffect } from "react";

const Sidebar = (props) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(props.isSubMenuOpen);
    const [isSubMenuReport, setIsSubMenuReport] = useState(props.isSubMenuReport);

    useEffect(() => {
        setIsSubMenuOpen(props.isSubMenuOpen);
        setIsSubMenuReport(props.isSubMenuReport);
    }, [props.isSubMenuOpen, props.isSubMenuReport]);

    const handleMenuClick = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const handleMenuReportClick = () => {
        setIsSubMenuReport(!isSubMenuReport);
    };

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <span className="logo-sidebar"></span>
            <span className="text-bold text-white">
             &nbsp; Mujur Harta Mulya
            </span>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false">
                        <li className="nav-item">
                            <a href="/dashboard" className={props.active === 'dashboard' ? "nav-link active" : 'nav-link'} >
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className={`nav-item ${isSubMenuOpen ? "menu-open" : ""}`}>
                            <a href="#" className="nav-link" onClick={handleMenuClick}>
                                <i className="nav-icon fas fa-money-bill-wave"></i>
                                <p>
                                    Currency Settings
                                    <i className={`right fas fa-angle-left ${isSubMenuOpen ? "rotate-icon" : ""}`}></i>
                                </p>
                            </a>
                            <ul className={`nav nav-treeview ${isSubMenuOpen ? "show" : ""}`}>
                                <li className="nav-item">
                                    <a href="/money" className={props.active === 'money' ? "nav-link active" : 'nav-link'} >
                                        <i className={props.active === 'money' ? "far fa-dot-circle nav-icon" : 'far fa-circle nav-icon'}></i>
                                        <p>Money</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/rate" className={props.active === 'rate' ? "nav-link active" : 'nav-link'}>
                                        <i className={props.active === 'rate' ? "far fa-dot-circle nav-icon" : 'far fa-circle nav-icon'}></i>
                                        <p>Rate</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="/user" className={props.active === 'user' ? "nav-link active" : 'nav-link'}>
                                <i className="nav-icon fas fa-users"></i>
                                <p>Users</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
