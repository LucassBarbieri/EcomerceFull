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
                <div className='bottomNavContainer'>

                    {fullscreen ?
                        <Link onClick={() => fullScreen()}>
                            <div className='bottomItem'>
                                <i className="bi bi-aspect-ratio bx-xs"></i>
                                <span className='bottomItemText'>Fullscreen</span>
                            </div>
                        </Link>
                        :
                        <Link onClick={() => fullScreenExit()}>
                            <div className='bottomItem'>
                                <i className="bi bi-aspect-ratio-fill bx-xs"></i>
                                <span className='bottomItemText'>Minimizar</span>
                            </div>
                        </Link>
                    }

                    <Link to={'/'}>
                        <div className='bottomItem'>
                            <i className="bi bi-arrow-clockwise bx-xs"></i>
                            <span className='bottomItemText'>Recargar</span>
                        </div>
                    </Link>

                    <Link className='bottomItemCenter' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <div className='bottomItemCenterIcon'>
                            <i className="bi bi-blockquote-right bx-sm"></i>
                        </div>
                    </Link>

                    <a href='https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0' className='bottomItem'>
                        <i className="bi bi-whatsapp bx-xs"></i>
                        <span className='bottomItemText'>Contacto</span>
                    </a>

                    {checkuser ?
                        <Link onClick={() => signOut(auth)}>
                            <div className='bottomItem'>
                                <i className="bi bi-whatsapp bx-xs"></i>
                                <span className='bottomItemText'>Contacto</span>
                            </div>
                        </Link>
                        :
                        <Link data-bs-toggle="offcanvas" data-bs-target="#ingresarRight" aria-controls="ingresarRight">
                            <div className='bottomItem'>
                                <i className="bi bi-whatsapp bx-xs"></i>
                                <span className='bottomItemText'>Ingresar</span>
                            </div>
                        </Link>
                    }
                    

                </div>
            </div>
        </>
    )
}

export default Mobnav;