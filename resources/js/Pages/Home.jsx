import Up from '@/Components/Up';
import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import {
    CircleHelp,
    Cog,
    Database,
    Globe2,
    Link as LinkIcon,
    RefreshCw,
    Wrench,
} from 'lucide-react';

export default function Home() {
    const stepMenu = [
        {
            title: 'Arsenal de Mensajes',
            text: 'Se definen problemas, casos de uso y resultados que resuelve la empresa',
            icon: Database,
            url: 'analisis',
        },
        {
            title: 'Asociacion de Mensajes',
            text: 'Seleccionamos industrias y desarrollamos perfiles de clientes realistas',
            icon: LinkIcon,
            url: '',
        },
        {
            title: 'Transmision de Mensajes',
            text: 'Mensajes que hablan directamente a la realidad de cada cliente potencial',
            icon: RefreshCw,
            url: '',
        },
        {
            title: 'Estructura de Mensajes',
            text: 'Falta',
            icon: Globe2,
            url: '',
        },
        {
            title: 'Plasmatismo de Mensajes',
            text: 'Falta',
            icon: Wrench,
            url: '',
        },
    ];

    return (
        <>
            <Head title="Home" />
            <Layout subMenu={subMenu} title="Inicio">
                <div>
                    {/* Header */}
                    <section className="mb-8 flex items-center justify-between">
                        <h1 className="text-3xl font-extrabold text-gray-900">
                            Inicio
                        </h1>
                        <div className="flex items-center gap-2 text-gray-600">
                            <CircleHelp className="h-4 w-4" />
                            <span className="text-base">
                                Datos para la creación de contenido
                            </span>
                            <button className="rounded-lg border border-gray-300 bg-gray-200 p-2 hover:bg-gray-100">
                                <Cog className="h-5 w-5" />
                            </button>
                        </div>
                    </section>

                    {/* Form Section */}
                    <section className="mb-12 flex flex-col items-center rounded-xl bg-white p-6 shadow-md">
                        <Link
                            href={route(
                                'content-generator.before-starting-steps',
                            )}
                            className="mt-4 rounded-lg bg-blue-500 px-6 py-2 font-extrabold text-white hover:bg-morado-200"
                        >
                            Crear Contenido
                        </Link>
                    </section>

                    {/* Next Step Section */}
                    <section className="mb-8 flex items-center justify-between">
                        <h2 className="text-3xl font-bold">
                            Siguiente Paso:{' '}
                            <span className="text-gray-500">
                                Fase de Análisis
                            </span>
                        </h2>
                        <button className="rounded-lg bg-blue-500 px-6 py-2 font-extrabold text-white hover:bg-morado-200">
                            Ir
                        </button>
                    </section>

                    {/* Cards Grid */}
                    <section className="grid grid-cols-1 gap-6 rounded-lg bg-morado-100 p-4 md:grid-cols-2 lg:grid-cols-3">
                        {/* Arsenal de Mensajes */}
                        {stepMenu.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="rounded-xl bg-white p-6 shadow-sm"
                                >
                                    <div className="mb-4">
                                        <item.icon className="h-6 w-6 text-violet-500" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        {item.text}
                                    </p>
                                    <Link
                                        href={item.url.length > 0 && item.url}
                                        className={
                                            item.url.length > 0
                                                ? 'block w-full max-w-32 rounded-lg bg-blue-500 py-2 text-center font-extrabold text-white hover:bg-morado-200'
                                                : 'block w-full max-w-32 rounded-lg bg-gray-100 py-2 text-center font-extrabold text-gray-600 hover:bg-gray-200'
                                        }
                                    >
                                        Ir
                                    </Link>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </Layout>

            <Up />
        </>
    );
}

function subMenu() {
    return (
        <>
            <p className="text-[13px]">Pasos para la creacion de contenido</p>
        </>
    );
}
