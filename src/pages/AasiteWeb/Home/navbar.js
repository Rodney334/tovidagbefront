// MainNavbar.js
import React, { useState, useEffect } from "react";
import { Collapse, NavbarToggler, NavLink, Container } from "reactstrap";
import { Link } from "react-router-dom";
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";
import "./navbars.css"; 

const MainNavbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    // useEffect(() => {
    //     window.addEventListener("scroll", scrollNavigation, true);
    // }, []);

    // const scrollNavigation = () => {
    //     var scrollup = document.documentElement.scrollTop;
    //     if (scrollup > 50) {
    //         setnavClass("is-sticky");
    //     } else {
    //         setnavClass("");
    //     }
    // };

    return (
        <nav className={"navbar navbar-expand-lg navbar-dark " + navClass} id="navbar">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="40" />
                    <img src={logolight} className="card-logo card-logo-light" alt="logo light" height="40" />
                </Link>

                <NavbarToggler className="navbar-toggler" onClick={toggle}>
                    <i className="mdi mdi-menu"></i>
                </NavbarToggler>

                <Collapse isOpen={isOpenMenu} className="navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-navs ml-auto">
                        <li className="nav-item">
                            <NavLink tag={Link} to="/" className="navs-link">ACCUEIL</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} to="/guide" className="navs-link">GUIDE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} to="/about" className="navs-link">A PROPOS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} to="/courses" className="navs-link">COURS EN LIGNE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} to="/denunciations" className="navs-link">DENONCIATIONS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} to="/news" className="navs-link">ACTUALITES</NavLink>
                        </li>
                    </ul>
                </Collapse>
            </Container>
        </nav>
    );
};

export default MainNavbar;
