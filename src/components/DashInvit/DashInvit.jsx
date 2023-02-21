import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AccountContext } from '../Context/Context'
import { app } from "../../firebase";
import { getAuth, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import Loading from '../Loading/Loading'
import Leftnav from '../Landing/Leftnav';
import './DashInvit.css';

export const DashInvit = (user) => {

    const [loading, setLoading] = useState(false);
    const { checkuser, rolCheck } = useContext(AccountContext)
    const auth = getAuth(app);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <>

                {!checkuser && <Navigate to="/landing" />}
                {rolCheck === 'admin' && <Navigate to="/admin" />}
                {rolCheck === 'cliente' && <Navigate to="/cliente" />}



                <Leftnav />

                <section id="hero" className="d-flex flex-column justify-content-center">
                    <div className="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1 className='color-t-b'>FINGER</h1>
                        <p className='color-t-b'>Bienvenidos Lucas! </p>
                        <div className="social-links color-t-b" >

                            <a href="#" className="twitter">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#" className="facebook">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="#" className="instagram">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="#" className="google-plus">
                                <i className="bx bxl-skype"></i>
                            </a>
                            <a href="#" className="linkedin">
                                <i className="bx bxl-linkedin"></i>
                            </a>

                        </div>
                    </div>
                </section>


            </>
        )
    }
}

export default DashInvit;