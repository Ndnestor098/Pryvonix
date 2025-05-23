import { Head } from '@inertiajs/react';
import { ChevronRight, Factory, Info, MonitorSmartphone } from 'lucide-react';
import { useState } from 'react';

export default function Mensaje() {
    const color = 'green';

    const [activeMenu, setActiveMenu] = useState(0);

    const textColorClasses = {
        green: 'text-green-600',
        blue: 'text-blue-600',
        red: 'text-red-600',
    };

    const bgColorClasses = {
        green: 'bg-green-100',
        blue: 'bg-blue-100',
        red: 'bg-red-100',
    };

    const menu = [
        {
            title: 'Acceder al sistema desde cualquier dispositivo',
            icon: MonitorSmartphone,
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
            <Head title="Mensajes" />

            <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
                <div className="flex h-full max-w-[1230px] overflow-hidden rounded-xl border border-gray-400 bg-gray-50">
                    {/* Sidebar */}
                    <aside className="w-72 border-r border-gray-200 bg-white py-6">
                        <div className="mb-8 border-b border-gray-300 px-6 pb-5">
                            <h1 className="text-center text-xl font-bold text-gray-800">
                                Control y Accesibilidad
                            </h1>
                        </div>
                        <nav className="space-y-1 px-3">
                            {menu.map((item, index) => (
                                <button
                                    key={index}
                                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                                        activeMenu === item.index
                                            ? `${bgColorClasses[color]} ${textColorClasses[color]} cursor-default`
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    onClick={() => setActiveMenu(item.index)}
                                >
                                    <span className="text-left">
                                        {item.title}
                                    </span>
                                    {activeMenu === item.index && (
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    )}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    <section className="flex-1 bg-white px-8 py-8">
                        <div className="max-w-4xl">
                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="mb-1 flex items-center gap-2 text-xl font-bold text-gray-800">
                                    <Info
                                        className={`h-4 w-4 ${textColorClasses[color]}`}
                                    />
                                    {menu[activeMenu].title}
                                </h2>
                                <p className="text-gray-600">
                                    Permite acceder al entorno operativo desde
                                    cualquier navegador, sin restricciones
                                    técnicas ni necesidad de instalaciones
                                    locales.
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
                                            España sigue dependiendo de
                                            terminales físicos locales para
                                            acceder a sus sistemas de planta.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg px-4 py-2 text-2xl">
                                        <div>
                                            <h2
                                                className={`mb-1 flex items-center gap-2 text-xl font-bold ${textColorClasses[color]}`}
                                            >
                                                La Oportunidad
                                            </h2>
                                            <p className="text-base text-gray-700">
                                                Esta dependencia técnica limita
                                                la capacidad de reacción, impide
                                                el acceso distribuido y encarece
                                                el soporte. Poder acceder desde
                                                cualquier dispositivo elimina
                                                fricciones operativas clave.
                                            </p>
                                        </div>
                                        <div className="w-full max-w-[138px]">
                                            <p className="w-full text-center text-sm text-gray-700">
                                                Empresas Potenciales
                                            </p>
                                            <span
                                                className={`block w-full text-center font-bold ${textColorClasses[color]}`}
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
                                    {[
                                        'Agricultura',
                                        'Comercio',
                                        'Industria',
                                    ].map((industry, index) => (
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
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}
