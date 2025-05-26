import Alert from '@/Components/Alert';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { CircleHelp, Cog } from 'lucide-react';

export default function index() {
    return (
        <>
            <Head title="Analisis" />
            <Layout subMenu={subMenu}>
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
