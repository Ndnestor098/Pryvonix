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
            <nav className="fixed z-10 flex h-[50px] w-full items-center bg-morado-600 px-4">
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
                            className="h-[36px] w-full rounded-lg bg-morado-200 p-2 placeholder:text-[15px] placeholder:font-semibold placeholder:text-violet-200"
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
                            className={`flex h-12 w-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg transition duration-200 hover:bg-morado-100 hover:text-morado-200 ${
                                select === idx
                                    ? 'bg-morado-100 text-morado-200'
                                    : 'text-morado-250'
                            }`}
                            onClick={() => setSelect(idx)}
                        >
                            {idx === 2 && (
                                <div className="mb-1 h-[3px] w-6 rounded-full bg-morado-100" />
                            )}

                            <Icon className="h-5 w-5" />

                            <p className="text-[12px] font-semibold leading-none">
                                {label}
                            </p>
                        </div>
                    ))}
                </aside>

                {/* Lateral derecho */}
                <div
                    className={`transition-all duration-300 ease-in-out ${hideAside ? 'w-[250px]' : 'w-[40px]'}`}
                >
                    {hideAside ? (
                        <aside className="relative h-full w-full transform border-r border-gray-200 p-4 transition-transform duration-300 ease-in-out">
                            {/* Titulo */}
                            <h2 className="text-[15px] font-bold">
                                {menu[select].label}
                            </h2>

                            {/* Area de textos y SubMenus */}
                            <p className="mt-5 text-sm text-gray-500">
                                Pasos para la creacion
                            </p>

                            {/* Boton para cerrar */}
                            <div
                                className="absolute right-0 top-10 cursor-pointer rounded-l-lg bg-gray-100 py-1 shadow-md"
                                onClick={() => setHideAside(false)}
                            >
                                <ChevronsLeft className="h-5 w-5 text-morado-400" />
                            </div>
                        </aside>
                    ) : (
                        <aside className="relative w-full transform bg-white transition-transform duration-300 ease-in-out">
                            <div
                                className="absolute left-0 top-10 cursor-pointer rounded-r-lg bg-gray-100 py-1 shadow-md"
                                onClick={() => setHideAside(true)}
                            >
                                <ChevronsRight className="h-5 w-5 text-morado-400" />
                            </div>
                        </aside>
                    )}
                </div>

                {/* Main content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </>
    );
}
