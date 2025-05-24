import MenuSelector from '@/Components/MenuSelector';
import { Link } from '@inertiajs/react';
import {
    ChevronsLeft,
    ChevronsRight,
    House,
    Images,
    Pen,
    SquareLibrary,
    User,
} from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }) {
    const [select, setSelect] = useState(0);
    const [hideAside, setHideAside] = useState(true);

    const menu = [
        {
            icon: House,
            label: 'Inicio',
        },
        {
            icon: Pen,
            label: 'Análisis',
        },
        {
            icon: SquareLibrary,
            label: 'Casos',
        },
        {
            icon: Images,
            label: 'Imágenes',
        },
        {
            icon: User,
            label: 'Perfil',
        },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="bg-morado-600 fixed z-10 flex h-[50px] w-full items-center px-4">
                <div className="flex items-center gap-9">
                    <div className="flex w-10 items-center justify-center">
                        <Link href={route('home')}>
                            <img src="assets/images/logo.png" alt="Logotipo" />
                        </Link>
                    </div>
                    <MenuSelector />
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <form className="w-full max-w-[600px]">
                        <input
                            className="bg-morado-200 h-[36px] w-full rounded-lg p-2 placeholder:text-[15px] placeholder:font-semibold placeholder:text-violet-200"
                            type="search"
                            placeholder="Contenido para Marketing y Ventas"
                        />
                    </form>
                </div>
            </nav>

            {/* Contenedor de layout */}
            <div className="flex h-screen bg-gray-100 pt-[50px]">
                {/* Slim Sidebar */}
                <aside className="flex w-[75px] flex-col items-center space-y-4 border-r border-gray-200 py-4">
                    {menu.map(({ icon: Icon, label }, idx) => (
                        <div
                            key={idx}
                            className={`hover:bg-morado-100 hover:text-morado-200 flex h-12 w-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg transition duration-200 ${
                                select === idx
                                    ? 'bg-morado-100 text-morado-200'
                                    : 'text-morado-250'
                            }`}
                            onClick={() => setSelect(idx)}
                        >
                            {idx === 2 && (
                                <div className="bg-morado-100 mb-1 h-[3px] w-6 rounded-full" />
                            )}

                            <Icon className="h-5 w-5" />

                            <p className="text-[12px] font-semibold leading-none">
                                {label}
                            </p>
                        </div>
                    ))}
                </aside>

                {/* Lateral derecho */}
                {hideAside ? (
                    <aside className="relative w-[250px] border-r border-gray-200 p-4">
                        <h2 className="text-[15px] font-bold">
                            {menu[select].label}
                        </h2>

                        <p className="mb-2 mt-5 text-sm text-gray-500">
                            {select === 0
                                ? 'Pasos para la creacion'
                                : 'Arsenal de Mensajes'}
                        </p>
                        {select === 1 && (
                            <>
                                <ul className="flex flex-col gap-1">
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Seleccion de Resultados
                                    </li>
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Seleccion de Problemas
                                    </li>
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Seleccion de Casos de Uso
                                    </li>
                                </ul>

                                <p className="mb-2 mt-5 text-sm text-gray-500">
                                    Asociacion de Mensajes
                                </p>
                                <ul className="flex flex-col gap-1">
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Identificacion de Industrias
                                    </li>
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Arquetipos de Clientes
                                    </li>
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Asociacion de Mensajes
                                    </li>
                                </ul>

                                <p className="mb-2 mt-5 text-sm text-gray-500">
                                    Transformacion de Mensajes
                                </p>
                                <ul className="flex flex-col gap-1">
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Contextualizacion Industrial
                                    </li>
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Aplicacion de Contextualizacion
                                    </li>
                                    <li className="hover:bg-morado-100 cursor-pointer rounded-lg px-2 py-1">
                                        Preparacion de Perfiles
                                    </li>
                                </ul>

                                <p className="mb-2 mt-5 text-sm text-gray-500">
                                    Estructuracion de Contenido
                                </p>

                                <p className="mb-2 mt-5 text-sm text-gray-500">
                                    Plasmacion de Mensajes
                                </p>
                            </>
                        )}

                        <div
                            className="absolute right-0 top-10 cursor-pointer rounded-l-lg bg-white py-1"
                            onClick={() => setHideAside(false)}
                        >
                            <ChevronsLeft className="text-morado-50 h-5 w-5" />
                        </div>
                    </aside>
                ) : (
                    <aside className="relative p-4">
                        <div
                            className="absolute left-0 top-10 cursor-pointer rounded-r-lg bg-white py-1"
                            onClick={() => setHideAside(true)}
                        >
                            <ChevronsRight className="text-morado-50 h-5 w-5" />
                        </div>
                    </aside>
                )}

                {/* Main content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </>
    );
}
