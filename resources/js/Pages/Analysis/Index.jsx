import Alert from '@/Components/Alert';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import {
    ChartNoAxesColumn,
    ChevronDown,
    ChevronRight,
    Database,
} from 'lucide-react';
import Mensaje from '../Mensajes';

export default function index() {
    const menu = [
        {
            title: 'Acceder al sistema desde cualquier dispositivo',
            index: 0,
        },
        {
            title: 'Acceda remotamente sin barreras',
            index: 1,
        },
        {
            title: 'Gestione múltiples programas',
            index: 2,
        },
        {
            title: 'Transforme su móvil en centro de control',
            index: 3,
        },
        {
            title: 'Gestione su escritorio desde cualquier lugar',
            index: 4,
        },
    ];

    return (
        <>
            <Head title="Analisis" />
            <Layout subMenu={subMenu} title="Analisis">
                <div>
                    {/* Breadcrumb */}
                    <div className="mb-6 flex items-center gap-2 text-gray-600">
                        <span>Arsenal de Mensajes</span>
                        <ChevronRight className="h-4 w-4" />
                        <span>Selección de Resultados</span>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold">
                            Resultados:{' '}
                            <span className="text-gray-500">
                                Mondrian Interface for Remote Operators
                            </span>
                        </h1>

                        {/* Controls */}
                        <div className="mt-1 flex gap-4">
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-50">
                                    <ChartNoAxesColumn className="h-4 w-4 text-morado-200" />
                                    <span>25</span>
                                    <ChevronDown className="h-4 w-4 text-blue-600" />
                                </button>
                                <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-50">
                                    <Database className="h-4 w-4 text-blue-600" />
                                    <span>Fuentes</span>
                                    <ChevronDown className="h-4 w-4 text-blue-600" />
                                </button>
                                <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-50">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/939/939640.png"
                                        alt=""
                                        className="h-4 w-4"
                                    />
                                    <span>🇪🇸</span>
                                    <ChevronDown className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm">IDIOMA</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Definition Card */}
                    <div className="mb-8 max-w-[1230px] rounded-lg border border-blue-300 bg-sky-100 p-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/17895/17895310.png"
                                    alt=""
                                    className="h-10 w-10"
                                />
                            </div>
                            <span className="">
                                Definición de beneficios accionables
                            </span>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="mb-4 text-sm font-medium text-gray-600">
                        Resultados agrupados por categorías
                    </div>

                    <Mensaje
                        color="green"
                        menu={menu}
                        title="Control y Accesibilidad"
                    />
                    <Mensaje
                        color="lime"
                        menu={menu}
                        title="Eficiencia Operativa"
                    />
                    <Mensaje
                        color="green-2"
                        menu={menu}
                        title="Adaptabilidad y Pernalizacion"
                    />
                    <Mensaje
                        color="lime-2"
                        menu={menu}
                        title="Innovacion y Valor Añadido"
                    />
                </div>
            </Layout>

            <Alert />
        </>
    );
}

function subMenu() {
    return (
        <>
            <div>
                <p className="mb-1 text-sm">Arsenal de Mensajes</p>
                <ul className="flex flex-col gap-1 text-black">
                    <li className="cursor-pointer rounded-lg bg-morado-100 px-2 py-1 hover:bg-morado-100">
                        Seleccion de Resultados
                    </li>
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Seleccion de Problemas
                    </li>
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Seleccion de Casos de Uso
                    </li>
                </ul>
            </div>

            <div>
                <p className="mb-1 text-sm text-gray-500">
                    Asociacion de Mensajes
                </p>
                <ul className="flex flex-col gap-1 text-black">
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Identificacion de Industrias
                    </li>
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Arquetipos de Clientes
                    </li>
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Asociacion de Mensajes
                    </li>
                </ul>
            </div>

            <div>
                <p className="mb-1 text-sm text-gray-500">
                    Transformacion de Mensajes
                </p>
                <ul className="flex flex-col gap-1 text-black">
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Contextualizacion Industrial
                    </li>
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Aplicacion de Contextualizacion
                    </li>
                    <li className="cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100">
                        Preparacion de Perfiles
                    </li>
                </ul>
            </div>

            <p className="mb-1 text-sm text-gray-500">
                Estructuracion de Contenido
            </p>

            <p className="mb-1 text-sm text-gray-500">Plasmacion de Mensajes</p>
        </>
    );
}
