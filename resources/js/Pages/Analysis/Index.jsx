import Up from '@/Components/Up';
import Layout from '@/Layouts/Layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import TopicBoard from './TopicBoard';

/**
 * Pagina principal del modulo de analisis. Muestra un tablero con las diferentes secciones del analisis.
 *
 * @param {Object} info - Informacion del analisis, que se utiliza para mostrar el titulo en la pagina e inviar la informacion.
 *
 * @returns Un JSX element que representa la pagina principal del modulo de analisis.
 */
export default function Index({ info }) {
    const [selectSubMenu, setSelectSubMenu] = useState(0);

    return (
        <>
            <Head title={`Analisis - ${info.title}`} />
            <Layout
                subMenu={SubMenu}
                title="Analisis"
                setSelectSubMenu={setSelectSubMenu}
                selectSubMenu={selectSubMenu}
            >
                <TopicBoard info={info} />
            </Layout>

            <Up />
        </>
    );
}

function SubMenu() {
    const url = usePage().url;

    return (
        <>
            <div>
                <p className="mb-1 text-sm">Arsenal de Mensajes</p>
                <ul className="flex flex-col gap-1 text-black">
                    <Link
                        href={route('analysis.results')}
                        className={`cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100 ${
                            url.includes('resultado') && 'bg-morado-100'
                        }`}
                    >
                        Seleccion de Resultados
                    </Link>
                    <Link
                        href={route('analysis.problems')}
                        className={`cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100 ${
                            url.includes('problemas') && 'bg-morado-100'
                        }`}
                    >
                        Seleccion de Problemas
                    </Link>
                    <Link
                        href={route('analysis.cases')}
                        className={`cursor-pointer rounded-lg px-2 py-1 hover:bg-morado-100 ${
                            url.includes('caso-de-uso') && 'bg-morado-100'
                        }`}
                    >
                        Seleccion de Casos de Uso
                    </Link>
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
