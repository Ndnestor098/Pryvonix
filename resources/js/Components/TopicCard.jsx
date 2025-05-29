import { ChevronRight, Factory, Info } from 'lucide-react';
import { useState } from 'react';

function colors(select) {
    const array = {
        Resultados: [
            {
                0: 'bg-emerald-500',
                1: 'bg-lime-200',
                2: 'bg-emerald-300',
                3: 'bg-lime-500',
                4: 'bg-lime-400',
            },
            {
                0: 'border-l-emerald-500',
                1: 'border-l-lime-200',
                2: 'border-l-emerald-300',
                3: 'border-l-lime-500',
                4: 'border-l-lime-400',
            },
            {
                0: 'text-emerald-500',
                1: 'text-lime-200',
                2: 'text-emerald-300',
                3: 'text-lime-500',
                4: 'text-lime-400',
            },
        ],
        Problemas: [
            {
                0: 'bg-red-500',
                1: 'bg-rose-300',
                2: 'bg-red-400',
                3: 'bg-rose-500',
                4: 'bg-rose-400',
            },
            {
                0: 'border-l-red-500',
                1: 'border-l-rose-300',
                2: 'border-l-red-400',
                3: 'border-l-rose-500',
                4: 'border-l-rose-700',
            },
            {
                0: 'text-red-500',
                1: 'text-rose-300',
                2: 'text-red-400',
                3: 'text-rose-500',
                4: 'text-rose-800',
            },
        ],
        'Casos de Uso': [
            {
                0: 'bg-blue-500',
                1: 'bg-sky-200',
                2: 'bg-blue-300',
                3: 'bg-sky-400',
                4: 'bg-sky-500',
            },
            {
                0: 'border-l-blue-500',
                1: 'border-l-sky-200',
                2: 'border-l-blue-300',
                3: 'border-l-sky-400',
                4: 'border-l-sky-500',
            },
            {
                0: 'text-blue-500',
                1: 'text-sky-200',
                2: 'text-blue-300',
                3: 'text-sky-400',
                4: 'text-sky-500',
            },
        ],
    };

    return array[select];
}

/**
 * Componente que renderiza una tarjeta de tema, con un sidebar para navegar entre
 * los diferentes subtemas y un contenido principal que muestra la información
 * asociada a cada subtema.
 *
 * @param {string} color - El color del tema, que se utiliza para personalizar
 *     la apariencia de la tarjeta.
 * @param {Array} menu - Un array de objetos con la siguiente estructura:
 *     - index: El índice del subtema en el array.
 *     - title: El título del subtema.
 * @param {string} title - El título del tema.
 * @param {number} idx - El índice del tema en el array de temas.
 *
 * @returns Un JSX element que representa la tarjeta del tema.
 */
export default function TopicCard({ color, menu, title, idx }) {
    const [activeMenu, setActiveMenu] = useState(0);

    const bgColorClasses = colors(color)[0];
    const borderColorClasses = colors(color)[1];
    const textColorClasses = colors(color)[2];

    return (
        <section className="relative mb-5 flex items-center">
            <div className="flex h-full max-w-[1230px] overflow-hidden rounded-xl border border-gray-400 bg-gray-50">
                {/* Sidebar */}
                <aside className="w-72 border-r border-gray-200 bg-white">
                    {/* Header */}
                    <div className="border-b border-gray-300 px-4 py-1">
                        <h1 className="text-lg font-bold text-gray-500">
                            {title}
                        </h1>
                    </div>

                    {/* Menu */}
                    <nav className="space-y-1">
                        {menu.map((item, index) => (
                            <button
                                key={index}
                                className={`flex w-full justify-center gap-3 border-b border-gray-300 px-3 py-2 transition-colors ${
                                    activeMenu === item.index
                                        ? `cursor-default border-l-[5px] ${borderColorClasses[idx]}`
                                        : 'border-l-[5px] border-l-transparent text-gray-700 hover:bg-gray-100'
                                } `}
                                onClick={() => setActiveMenu(item.index)}
                            >
                                <div className="flex flex-col justify-center gap-2">
                                    <span
                                        className={`flex w-min items-center whitespace-nowrap rounded-xl ${bgColorClasses[idx]} px-2 py-1 text-sm font-bold text-black`}
                                    >
                                        {title}
                                    </span>
                                    <span className="text-left text-sm">
                                        {item.title}
                                    </span>
                                </div>
                                <div className="flex w-full items-center">
                                    {activeMenu === item.index && (
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <section className="flex-1 bg-white px-8 py-8">
                    <div className="max-w-4xl">
                        {/* Header */}
                        <div className="mb-8">
                            <h2 className="mb-1 flex items-center gap-2 text-xl font-bold text-gray-800">
                                <Info
                                    className={`h-4 w-4 ${textColorClasses[idx]}`}
                                />
                                {menu[activeMenu].title}
                            </h2>
                            <p className="text-gray-600">
                                Permite acceder al entorno operativo desde
                                cualquier navegador, sin restricciones técnicas
                                ni necesidad de instalaciones locales.
                            </p>
                        </div>

                        {/* Stats Card */}
                        <div className="mb-5 rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
                            <div className="flex flex-col items-center justify-between">
                                <div className="flex gap-2 rounded-lg bg-gray-200 px-2 py-1">
                                    <ChevronRight className="mt-1 h-5 w-7 rounded-full bg-white text-gray-400" />
                                    <p className="text-gray-800">
                                        <strong>
                                            Dato objetivo asociado:{' '}
                                        </strong>
                                        El 65% de las pymes industriales en
                                        España sigue dependiendo de terminales
                                        físicos locales para acceder a sus
                                        sistemas de planta.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between rounded-lg px-4 py-2 text-2xl">
                                    <div>
                                        <h2
                                            className={`mb-1 flex items-center gap-2 text-xl font-extrabold text-blue-500`}
                                        >
                                            La Oportunidad
                                        </h2>
                                        <p className="text-base text-gray-700">
                                            Esta dependencia técnica limita la
                                            capacidad de reacción, impide el
                                            acceso distribuido y encarece el
                                            soporte. Poder acceder desde
                                            cualquier dispositivo elimina
                                            fricciones operativas clave.
                                        </p>
                                    </div>
                                    <div className="w-full max-w-[138px]">
                                        <p className="w-full text-center text-sm text-gray-700">
                                            Empresas Potenciales
                                        </p>
                                        <span
                                            className={`block w-full text-center font-bold text-blue-500`}
                                        >
                                            +53
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Commercial Application */}
                        <div>
                            <h3 className="mb-1 text-lg font-medium text-gray-800">
                                Aplicación comercial
                            </h3>
                            <p className="mb-4 text-sm text-gray-600">
                                Tres industrias más relevantes
                            </p>
                            <div className="space-y-4">
                                {['Agricultura', 'Comercio', 'Industria'].map(
                                    (industry, index) => (
                                        <div
                                            key={index}
                                            className="rounded-lg border border-gray-200 bg-gray-100 p-4 transition-shadow hover:shadow-md"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-medium text-gray-800">
                                                        {industry}
                                                    </h4>
                                                    <p className="text-sm text-gray-600">
                                                        Cultivos donde es
                                                        necesario supervisar
                                                        desde lejos
                                                    </p>
                                                </div>
                                                <div className="rounded bg-gray-200 p-2">
                                                    <Factory className="h-5 w-5 text-gray-500" />
                                                </div>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
