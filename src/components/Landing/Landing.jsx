import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { AccountContext, GlobalContext } from '../Context/Context'
import { Link, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Landing.css';
import Loading from '../Loading/Loading'
import Leftnav from './Leftnav';
import Mobnav from './Mobnav';

import img_logo from './img/logolarge.png';

import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

export const Landing = () => {

  const [loading, setLoading] = useState(false);
  const { checkuser, rolCheck } = useContext(AccountContext)
  const { sweetWelcome } = useContext(GlobalContext)
  const customId = "custom-id-yes";

  const toastLanding = () => {
    toast.info('Cargando componentes...', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: customId,
    });
  }

  // window.onload = function () {
  //   sweetWelcome();
  // }
  
  useEffect(() => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setTimeout(() => {
        toastLanding();
      }, 1000)

    }, 3000)

  }, [])


  const cards = [
    {
      name: 'Pagina Web',
      description: 'Crea tu sitio web personal o empresarial, comparte tus ideas con el resto del mundo, sitios seguros y faciles.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Tienda Online',
      description: '¿Tenes un negocio u emprendimiento y queres mejorar tus ventas o lograr un mayor alcance? Con nuestras tiendas online podras aumentar las ventas en todos tus productos.',
      icon: NewspaperIcon,
    },
    {
      name: 'APP',
      description: 'Crearemos tu propia aplicacion mobile para que puedas gestionar tus proyectos de una manera facil y sencilla desde cualquier parte del mundo.',
      icon: PhoneIcon,
    },
  ]


  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <Leftnav />


        {/* {!checkuser && <Navigate to="/landing" />} */}
        {rolCheck === 'admin' && <Navigate to="/admin" />}
        {rolCheck === 'cliente' && <Navigate to="/cliente" />}

        {/* <section className='sectionHero'>
          <div className="relative isolate bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1097 845"
              aria-hidden="true"
              className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
            >
              <path
                fill="url(#7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1)"
                fillOpacity=".2"
                d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
              />
              <defs>
                <linearGradient
                  id="7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1"
                  x1="1097.04"
                  x2="-141.165"
                  y1=".22"
                  y2="363.075"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#776FFF" />
                  <stop offset={1} stopColor="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1097 845"
              aria-hidden="true"
              className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
            >
              <path
                fill="url(#49c00522-612e-41d3-bb32-ce7d1fa28850)"
                fillOpacity=".2"
                d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
              />
              <defs>
                <linearGradient
                  id="49c00522-612e-41d3-bb32-ce7d1fa28850"
                  x1="1097.04"
                  x2="-141.165"
                  y1=".22"
                  y2="363.075"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#776FFF" />
                  <stop offset={1} stopColor="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="textInitiazl max-w-2xl lg:mx-0">
                <img src={img_logo} className='img-fluid' alt="" />
                <p className="mt-6 text-lg leading-8 text-gray-300 txt-fonts">
                  El momento de proyectar tus ideas es ahora y estamos aca para ayudarte a lograr el mayor potencial en cada uno de tus proyectos!
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 containerInitial">
                {cards.map((card) => (
                  <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                    <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    <div className="text-base leading-7">
                      <h3 className="txt-fonts text-white "><strong>{card.name}</strong></h3>
                      <p className="mt-2 text-gray-300 txt-fonts">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <hr />
              <hr />
            </div>
          </div>
        </section> */}

        <section id="hero" className="d-flex flex-column justify-content-center">
          <div className="container " data-aos="zoom-in" data-aos-delay="100">
            <img src={img_logo} className='img-fluid imgAndroid' alt="" />
            <p className='text-white'>{checkuser ? `Bienvenido/a ${localStorage.getItem('name')}!` : ''}</p>

            <div className="social-links text-white" >

              <Link to={'/'} className="discord">
                <i className="bx bxl-discord text-white"></i>
              </Link>
              <a href='https://github.com/LucassBarbieri' className="github">
                <i className="bx bxl-github text-white"></i>
              </a>
              <a href='https://www.instagram.com/finger.ar/' className="instagram">
                <i className="bx bxl-instagram text-white"></i>
              </a>
              <a href='https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0' className="whatsapp">
                <i className="bx bxl-whatsapp text-white"></i>
              </a>
              <Link to={'/'} className="twitter">
                <i className="bx bxl-twitter text-white"></i>
              </Link>

            </div>
          </div>

        </section>


        <Mobnav />

        <ToastContainer
          closeButton={false}
        />

      </>
    )
  }
}

export default Landing;