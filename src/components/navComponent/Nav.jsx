import { useState } from "react";
import { Burger } from "./Burger.jsx";
import { Cross } from "./Cross.jsx";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center z-50">
            {/* Menú de escritorio */}
            <ul className="text-xl gap-9 md:flex text-[#F8F9FA] hidden relative font-bold font-lato">
                <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#welcome">Inicio</a></li>
                <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#carrusel">Salas</a></li>
                <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#tarifas">Tarifas</a></li>
                <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#horario">Horario</a></li>
                <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#mapa">Mapa</a></li>
                <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="https://wa.me/34677038873" target="_blank">Contacto</a></li>
            </ul>

            {/* Botón de hamburguesa */}
            {!isOpen && <Burger toggleMenu={toggleMenu} />}


            {/* Menú móvil */}
            <div
                className={`md:hidden py-5 px-5 w-full h-dvh left-0 top-0 absolute text-3xl bg-[#21252A] flex flex-col content-around gap-9
                transition-transform duration-500 ease-in-out  z-50 
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Botón de cierre */}
                <span className="flex w-full justify-end"><Cross toggleMenu={toggleMenu} /></span>

                {/* Contenido del menú */}
                <div className="h-full">
                    <ul className="h-full flex flex-col items-center justify-center gap-3 font-bold text-[#F8F9FA] font-mochiy text-2xl" >
                        <li className={`hover:text-[#6C757D] transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-200 animate-delay-300 ' : ''}`}>
                            <a href="#">
                                Inicio
                            </a>
                        </li>

                        <hr className="border-2 text-[#6C757D] w-3/4" />

                        <li className={`hover:text-[#6C757D]  transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-200 animate-delay-300 ' : ''}`}>
                            <a href="#carrusel">
                                Salas
                            </a>
                        </li>

                        <hr className="border-2 text-[#6C757D] w-3/4" />


                        <li className={`hover:text-[#6C757D]  transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-300 animate-delay-300 ' : ''}`}>
                            <a href="#tarifas">
                                Tarifas
                            </a>
                        </li>

                        <hr className="border-2 text-[#6C757D] w-3/4" />

                        <li className={`hover:text-[#6C757D]  transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-500 animate-delay-300 ' : ''}`}>
                            <a href="#horario">
                                Horario
                            </a>
                        </li>

                        <hr className="border-2 text-[#6C757D] w-3/4" />

                        <li className={`hover:text-[#6C757D] transition-all duration-300 ease-in-out 
                        ${isOpen ? 'animate-fade-left animate-duration-500 animate-delay-300 ' : ''}`}>
                            <a href="#mapa">
                                Mapa
                            </a>
                        </li>

                        <hr className="border-2 text-[#6C757D] w-3/4" />

                        <li className={`hover:text-[#6C757D] transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-700 animate-delay-300 ' : ''}`}>
                            <a href="https://wa.me/34677038873" target="_blank">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
