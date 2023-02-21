import React, { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import img from './img/favicon.png'
import { Link } from 'react-router-dom'
import Modals from '../Modals/Modals'
import { AccountContext } from '../Context/Context'
import { app } from "../../firebase/";
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(app);

const Leftnav = () => {

    const { checkuser } = useContext(AccountContext)

    return (
        <>
            <Modals />

            {/* MENU DESKTOP */}
            {/* <div className='iconcontainer'>
                <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
                </div>
            </div> */}

            <header id="header" className="navleft d-flex flex-column justify-content-center">

                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        {checkuser ?
                            <li data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img className="rounded-circle mb-3 fit-cover img-navleft" src={localStorage.getItem('photoPic')} alt="" />
                            </li>
                            : 
                            ''
                        }
                        <li data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                            <Link className="nav-link scrollto" >
                                <i className="bx bx-home"></i>
                                <span className='txt-fonts'>Home</span>
                            </Link>
                        </li>
                        <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <Link className="nav-link scrollto">
                                <i className="bi bi-gear"></i>
                                <span className='txt-fonts'>Herramientas</span>
                            </Link>
                        </li>
                        <li data-bs-toggle="offcanvas" data-bs-target="#serviciosRight" aria-controls="serviciosRight">
                            <Link className="nav-link scrollto">
                                <i className="bi bi-hdd-network"></i>
                                <span className='txt-fonts'>Servicios</span>
                            </Link>
                        </li>
                        <li data-bs-toggle="offcanvas" data-bs-target="#portfolioRight" aria-controls="portfolioRight">
                            <Link className="nav-link scrollto">
                                <i className="bx bx-book-content"></i>
                                <span className='txt-fonts'>Portfolio</span>
                            </Link>
                        </li>

                        {checkuser ?
                            <li onClick={() => signOut(auth)}>
                                <Link className="nav-link scrollto">
                                    <i className="bi bi-box-arrow-in-right"></i>
                                    <span className='txt-fonts'>Salir</span>
                                </Link>
                            </li>
                            :
                            <li data-bs-toggle="offcanvas" data-bs-target="#ingresarRight" aria-controls="ingresarRight">
                                <Link className="nav-link scrollto">
                                    <i className="bi bi-box-arrow-in-right"></i>
                                    <span className='txt-fonts'>Ingresar</span>
                                </Link>
                            </li>
                        }
                    </ul>
                </nav>

                {/* MENU ANDROID/IOS */}
                <div className="offcanvas offcanvas-start" data-bs-scroll="false" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                            <img src={img} alt="Logo" height="50" width="40" />
                        </h5>
                    </div>

                    <div className="offcanvas-body">

                        {checkuser ?
                            <>
                                <div className="col">
                                    <div className="profileCard card border-0 shadow-none">
                                        <div className="card-body text-center d-flex flex-column align-items-center p-0">
                                            {/* <img className="rounded-circle mb-3 fit-cover imgProfile" src={localStorage.getItem('photoPic')} alt="" /> */}
                                            <h5 className="fw-bold text-warning card-title mb-0">
                                                <strong>{localStorage.getItem('name')}</strong>
                                            </h5>
                                            <p className="text-muted card-text mb-2">www.finger.net.ar</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='hrContainer'>
                                    <hr className='hr' />
                                </div>
                            </>
                            : ''}
                        <Link data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close" className="btnContainerMenu nav-link menu-title link-nav txt-color-purple" >
                            <i className="bi bi-globe-americas"></i>
                            <span className='txt-fonts'>Inicio</span>
                        </Link>

                        <div data-bs-toggle="offcanvas">
                            <div className="btnContainerMenu nav-link menu-title link-nav txt-color-purple" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i className="bi bi-gear"></i>
                                <span className='txt-fonts'>Herramientas</span>
                            </div>
                        </div>

                        <div data-bs-toggle="offcanvas">
                            <div className="btnContainerMenu nav-link menu-title link-nav txt-color-purple" data-bs-toggle="offcanvas" data-bs-target="#serviciosRight" aria-controls="serviciosRight">
                            <i className="bi bi-hdd-network"></i>
                                <span className='txt-fonts'>Servicios</span>
                            </div>
                        </div>

                        <div data-bs-toggle="offcanvas">
                            <div className="btnContainerMenu nav-link menu-title link-nav txt-color-purple" data-bs-toggle="offcanvas" data-bs-target="#portfolioRight" aria-controls="portfolioRight">
                            <i className="bx bx-book-content"></i>
                                <span className='txt-fonts'>Portfolios</span>
                            </div>
                        </div>

                        <div data-bs-toggle="offcanvas">
                            <div className="btnContainerMenu nav-link menu-title link-nav txt-color-purple" data-bs-toggle="offcanvas" data-bs-target="#ingresarRight" aria-controls="ingresarRight">
                            <i className="bi bi-box-arrow-in-right"></i>
                                <span className='txt-fonts'>Ingresar</span>
                            </div>
                        </div>

                    </div>

                    <div className='botoncierremenu' data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="bi bi-arrow-left-circle bx-md botoncierremenuicon"></i>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Leftnav;
