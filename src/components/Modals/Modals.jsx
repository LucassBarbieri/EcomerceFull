import React from 'react';
import { AccountContext } from '../Context/Context';
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import '../Modals/Modals.css';
import { Link } from 'react-router-dom';

const perks = [
    {
        name: 'SERVICIO TECNICO',
        imageSrc: '/assets/img/herramientasIcons/soporte.svg',
        description:
            "Tendras atencion tecnica las 24 horas, los 365 dias del año para ayudarte ante cualquier inconveniente que se te presente.",
    },
    {
        name: 'MARKETING/FOTOGRAFIA',
        imageSrc: '/assets/img/herramientasIcons/marketin.svg',
        description:
            "Tenemos un grupo de expertos en marketing que te ayudaran a expander tus ideas y lograr un mayor alcance de publico.",
    },
    {
        name: 'PANEL DE CONTROL',
        imageSrc: '/assets/img/herramientasIcons/cpanel.svg',
        description:
            'Un panel de control exclusivo de tu proyecto para poder editar el contenido en cualquier momento y lugar que necesites.',
    },
    {
        name: 'ATENCION PERSONALIZADA',
        imageSrc: '/assets/img/herramientasIcons/atcliente.svg',
        description:
            "Te brindamos atencion personalizada las 24 horas del dia, para que tu proyectos se encuentren en optimas condiciones.",
    },
]


const Modals = () => {

    const { signInWithGoogle, checkuser, isRegister, setIsRegister, submithandler } = useContext(AccountContext)

    return (
        <>
            {/* HERRAMIENTAS */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-body">

                    <section className='sectionHerr'>

                        <main className='mainOrange'>
                            <div className="section-title">
                                <h2 className='text-white '>Herramientas</h2>
                                <p className='text-gray-300 txt-fonts'>Sabemos que mantener un sitio web o un hosting no es tarea facil, contamos con un amplio equipo de profesionales que te ofrecera la mejor calidad de atencion y la mas rapida en el mercado, podras administrar tus proyectos de una forma facil, rapida y dinamica.</p>
                            </div>
                        </main>

                        <main className='mainConte container-fluid'>
                            <div className=''>
                                <div className="bg-gray-50 containerinfoherr">

                                    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                            {perks.map((perk) => (
                                                <div key={perk.name} className="sm:flex txt-fonts">
                                                    <div className="sm:flex-shrink-0">
                                                        <div className="flow-root">
                                                            <img className="h-24 w-28" src={perk.imageSrc} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                                        <h3 className="text-sm font-medium text-gray-900 txt-color-purple txt-fonts">{perk.name}</h3>
                                                        <p className="mt-2 text-sm text-gray-500 txt-fonts">{perk.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </main>

                    </section>

                    <div className='botoncierremenuup swichOn' data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="bi bi-arrow-left-circle bx-md botoncierremenuicon text-gray-300"></i>
                    </div>

                </div>
            </div>

            {/* SERVICIOS */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="serviciosRight" aria-labelledby="serviciosRightLabel">
                <div className="offcanvas-body">

                    <section className='sectionHerr'>

                        <main className='mainOrange'>
                            <div className="section-title">
                                <h2 className='text-white'>Servicios</h2>
                                <p className='text-gray-300 txt-fonts'>Nuestro equipo esta capacitado para ayudarte a realizar la mejor version de tus proyectos. <br></br>
                                    Todos nuestros diseños se realizan con sumo detalle y prestando atencion a las necesidades de nuestros socios.</p>
                            </div>
                        </main>

                        <main className='mainConte'>

                            <div className='servicescontainer'>
                                <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    <div class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                                        <dt>
                                            <div class="absolute rounded-md bg-indigo-700 p-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-europe-africa h-6 w-6 text-white" viewBox="0 0 16 16">
                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z" />
                                                </svg>

                                            </div>
                                            <p class="ml-16 text-2xl font-semibold text-gray-900 txt-fonts">Sitio web</p>
                                        </dt>
                                        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                                            <p class="text-sm font-medium text-gray-500 txt-fonts">Crea tu sitio web personal o empresarial, comparte tus ideas con el resto del mundo, sitios seguros y faciles.</p>
                                            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                <div class="text-sm">
                                                    <Link class="font-medium text-indigo-600" to={'https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0'}>
                                                        Solicitar
                                                    </Link>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>

                                    <div class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                                        <dt>
                                            <div class="absolute rounded-md bg-indigo-700 p-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check h-6 w-6 text-white" viewBox="0 0 16 16">
                                                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>

                                            </div>
                                            <p class="ml-16 text-2xl font-semibold text-gray-900 txt-fonts">Tienda online</p>
                                        </dt>
                                        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                                            <p class="text-sm font-medium text-gray-500 txt-fonts">Vende y administra tus productos de una manera facil con nuestras linea de tiendas online, diseñadas a tu gusto.</p>
                                            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                <div class="text-sm">
                                                <Link class="font-medium text-indigo-600" to={'https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0'}>
                                                        Solicitar
                                                    </Link>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                                        <dt>
                                            <div class="absolute rounded-md bg-indigo-700 p-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-terminal-dash h-6 w-6 text-white" viewBox="0 0 16 16">
                                                    <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />
                                                    <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z" />
                                                </svg>

                                            </div>
                                            <p class="ml-16 text-2xl font-semibold text-gray-900 txt-fonts">CRM</p>
                                        </dt>
                                        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                                            <p class="text-sm font-medium text-gray-500 txt-fonts">Crea tu propio sistema de gestion para tu negocio vitual/fisico, dale accesos a tus empleados para que puedan realizar diversas tareas.</p>
                                            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                <div class="text-sm">
                                                <Link class="font-medium text-indigo-600" to={'https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0'}>
                                                        Solicitar
                                                    </Link>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                                        <dt>
                                            <div class="absolute rounded-md bg-indigo-700 p-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-receipt h-6 w-6 text-white" viewBox="0 0 16 16">
                                                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />

                                                </svg>

                                            </div>
                                            <p class="ml-16 text-2xl font-semibold text-gray-900 txt-fonts">Foros</p>
                                        </dt>
                                        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                                            <p class="text-sm font-medium text-gray-500 txt-fonts">Ideal para comunidades gamers o empresas, un sistema de foros privados/publicos para que tu comunidad pueda interactuar y compartir sus ideas e informacion.</p>
                                            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                <div class="text-sm">
                                                <Link class="font-medium text-indigo-600" to={'https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0'}>
                                                        Solicitar
                                                    </Link>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                                        <dt>
                                            <div class="absolute rounded-md bg-indigo-700 p-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share h-6 w-6 text-white" viewBox="0 0 16 16">
                                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                </svg>

                                            </div>
                                            <p class="ml-16 text-2xl font-semibold text-gray-900 txt-fonts">Dominios</p>
                                        </dt>
                                        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                                            <p class="text-sm font-medium text-gray-500 txt-fonts">Encuentra tu dominio idea, gestionaremos el registro de tu empresa en un dominio personalizado.</p>
                                            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                <div class="text-sm">
                                                <Link class="font-medium text-indigo-600" to={'https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0'}>
                                                        Solicitar
                                                    </Link>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                                        <dt>
                                            <div class="absolute rounded-md bg-indigo-700 p-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database-add h-6 w-6 text-white" viewBox="0 0 16 16">
                                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z" />
                                                    <path d="M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777ZM3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4Z" />
                                                </svg>

                                            </div>
                                            <p class="ml-16 text-2xl font-semibold text-gray-900 txt-fonts">Hosting</p>
                                        </dt>
                                        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                                            <p class="text-sm font-medium text-gray-500 txt-fonts">Te traemos la solucion a los problemas de alojamiento, te brindamos un servicio optimo de alojamiento virtual para que puedas llevar toda tu informacion a todas partes.</p>
                                            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                <div class="text-sm">
                                                <Link class="font-medium text-indigo-600" to={'https://api.whatsapp.com/send/?phone=%2B5491122664022&text=Solicito+Cotizacion+a+nombre+de%3A&type=phone_number&app_absent=0'}>
                                                        Solicitar
                                                    </Link>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                        </main>

                    </section>

                    <div className='botoncierremenuup swichOn' data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="bi bi-arrow-left-circle bx-md botoncierremenuicon text-gray-300"></i>
                    </div>

                </div>
            </div>

            {/* PORTFOLIO */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="portfolioRight" aria-labelledby="portfolioRightLabel">
                <div className="offcanvas-body">
                    <section className='sectionHerr portfolio-details' id="portfolio-details">

                        <main className='mainOrange'>
                            <div className="section-title">
                                <h2 className='text-white'>Portfolio</h2>
                                <p className='text-gray-300 txt-fonts'>Observa el alcance que puede tener tu proyecto, a continuacion tendras alguno de nuestros trabajos mas recientes, podras visitar los sitios y navegarlos para tener una mejor experiencia de como quedara tu proximo proyecto eligiendo a FINGER.</p>
                            </div>
                        </main>

                        <main className='mainConte'>
                            <div className="container">

                                <div className="row gy-4">
                                    <div className="col-lg-8">
                                        <div className="portfolio-details-slider swiper">
                                            <div id="carouselExampleIndicators" className="carousel slide">
                                                <div className="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                </div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img src="./assets/img/portfolioFinger/oestedesign.jpeg" className="d-block w-100" alt="" />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="./assets/img/portfolioFinger/imperiolnj.jpeg" className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="./assets/img/portfolioFinger/shopgrid.jpeg" className="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 infoContainer">
                                        <div className="portfolio-info">
                                            <h3>Detalles de proyectos</h3>
                                            <ul>
                                                <li><strong>Categoria</strong>: Web design</li>
                                                <li><strong>Herramientas</strong>: <br />HTML, CSS, JS, BOOTSTRAP/RESPONSIVE</li>
                                                <li><strong>Tiempo de creacion</strong>: 10 dias</li>
                                            </ul>
                                        </div>
                                        {/* <div className="portfolio-description">
                                            <h2>Tu proyecto</h2>
                                            <p>
                                                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                            </p>
                                        </div> */}
                                    </div>

                                </div>
                            </div>

                            <hr />

                        </main>

                    </section>

                    <div className='botoncierremenuup swichOn' data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="bi bi-arrow-left-circle bx-md botoncierremenuicon text-gray-300"></i>
                    </div>

                </div>

            </div>

            {/* INGRESO */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="ingresarRight" aria-labelledby="ingresarRightLabel">
                <div className="offcanvas-body">
                    <section id="services" className="services">

                        {/* <h1>INGRESO NO PERMITIDO</h1>
                        <p>Esta aplicacion se encuentra en fase BETA por lo tanto no admite el ingreso a la plataforma.</p>
                        <p>Para poder ingresar a la plataforma debes ingresar a: <a href='https://finger.net.ar/'>FINGER</a>.</p>
                        <p>Desde ya te pedimos disculpas los inconveniente, ten en cuenta que esta aplicacion se esta poniendo a prueba para estudiar el comportamiento con nuestros asociados, pronto llegara la version final y podras disfrutar de todas las ventajas de ser socio FINGER.</p> */}
                        {checkuser ? "Estas logeado" :
                            <>
                                <div className="section-title">
                                    <h2>Plataforma</h2>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="p-5">

                                            <form className="user" onSubmit={submithandler}>

                                                <div className="mb-3">
                                                    <input className="form-control form-control-user" type="email" placeholder="E-Mail" name="email" />
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control form-control-user" type="password" placeholder="Contraseña" name="password" />
                                                </div>

                                                <div className="mb-3">
                                                    <label>
                                                        Rol:
                                                        <select id='rol'>
                                                            <option value="admin">Admin</option>
                                                            <option value="cliente">Cliente</option>
                                                        </select>
                                                    </label>
                                                </div>

                                                <input className="btn btn-warning d-block btn-user w-100" type="submit" value={isRegister ? "Registrar" : "Iniciar session"} />

                                                <hr />

                                                <button className="btn btn-warning d-block btn-user w-100" onClick={() => setIsRegister(!isRegister)} >
                                                    <i className="bi bi-handbag-fill"></i>
                                                    &nbsp; {isRegister ? "Ya tengo una cuenta" : "Registrarme"}
                                                </button>

                                                <hr />

                                            </form>

                                            <button className="btn btn-warning d-block btn-google btn-user w-100 mb-2" onClick={signInWithGoogle} data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <i className="fab fa-google"></i>
                                                &nbsp; Google
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </section>
                    <div className='botoncierremenu swichOn' data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="bi bi-arrow-left-circle bx-md botoncierremenuicon text-gray-300"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modals;
