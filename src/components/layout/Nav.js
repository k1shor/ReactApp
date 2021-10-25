import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row nav-header align-items-center">
                    <div className="col-md-3">
                        <Link className="navbar-brand" to="#">
                            Online Commerce
                        </Link>

                    </div>
                    <div className="col-md-6">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>

                    </div>
                    <div className="col-md-3">
                        <ul className="d-flex justify-content-center">
                            <li className="list-unstyled"><Link className="text-white text-decoration-none px-2 fs-4" to="/SignIn"><i className="fas fa-sign-in-alt"></i></Link></li>
                            <li className="list-unstyled"><Link className="text-white text-decoration-none px-2 fs-4" to="/Signup"><i className="fas fa-user-plus"></i></Link></li>
                            <li className="list-unstyled"><Link className="text-white text-decoration-none px-2 fs-4" to="#"><i className="fas fa-cart-arrow-down"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-main">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="./deals">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="#">Customer Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
