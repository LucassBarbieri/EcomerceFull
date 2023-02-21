import React, { useContext, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';
import { AccountContext } from '../Context/Context';
import { app } from "../../firebase/";
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(app);

const Mobnav = () => {

    const { checkuser } = useContext(AccountContext)

    let el = document.documentElement;

    const [fullscreen, setFullscreen] = useState('true');

    const fullScreen = () => {
        el.requestFullscreen();
        setFullscreen(false)
    }

    const fullScreenExit = () => {
        el.preventDefault();
        el.exitFullscreen()
        setFullscreen(true)
    }

    return (
        <>
            <div className='displayoff fixed-bottom bg-light'>
                <div className="mobnavContainerPrimary">

                    {fullscreen ?
                        <Link onClick={() => fullScreen()} className="mobnav-btn">
                        <div className='containerBts'>
                            <i className="bi bi-aspect-ratio bx-xs"></i>
                            <p className='txt-mobnav txt-fonts'>Fullscreen</p>
                        </div>
                    </Link>
                        :
                        <Link onClick={() => fullScreenExit()} className="mobnav-btn" >
                            <div className='containerBts'>
                                <i className="bi bi-aspect-ratio-fill bx-xs"></i>
                                <p className='txt-mobnav txt-fonts'>Minimizar</p>
                            </div>
                        </Link>
                    }

                    <Link to={'/'} className="mobnav-btn">
                        <div className='containerBts'>
                            <i className="bi bi-arrow-clockwise bx-xs"></i>
                            <p className='txt-mobnav txt-fonts'>Recargar</p>
                        </div>
                    </Link>

                    <Link className="mobnav-btn-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <i className="bi bi-blockquote-right bx-sm iconCenter"></i>
                    </Link>

                    <a href='https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0' className="mobnav-btn">
                        <div className='containerBts'>
                            <i className="bi bi-whatsapp bx-xs"></i>
                            <p className='txt-mobnav txt-fonts'>Contacto</p>
                        </div>
                    </a>

                    {checkuser ?
                        <Link className="mobnav-btn" onClick={() => signOut(auth)}>
                            <div className='containerBts'>
                                <i className="bi bi-x-circle bx-xs"></i>
                                <p className='txt-mobnav txt-fonts'>Salir</p>
                            </div>
                        </Link>
                        :
                        <Link className="mobnav-btn" data-bs-toggle="offcanvas" data-bs-target="#ingresarRight" aria-controls="ingresarRight">
                            <div className='containerBts'>
                                <i className="bi bi-door-open bx-xs"></i>
                                <p className='txt-mobnav txt-fonts'>Ingresar</p>
                            </div>
                        </Link>
                    }
                </div>
            </div>


        </>
    )
}

export default Mobnav;