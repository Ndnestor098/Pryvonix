import { Link } from '@inertiajs/react';

export default function BeforeStartingSteps() {
    const steps = [
        {
            title: 'Paso 1: Seleccion del Servicio',
            color: '#d93b0e',
        },
        {
            title: 'Paso 2: Clientes Potenciales',
            color: '#fa8803',
        },
        {
            title: 'Paso 3: Exitos del Servicio',
            color: '#294050',
        },
        {
            title: 'Paso 4: Contextualizacion Industrial',
            color: '#6f838c',
        },
        {
            title: 'Paso 5: Creacion de Contenido',
            color: '#7ec1ba',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
            <div className="mx-auto max-w-6xl">
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                    <div className="flex-1">
                        <h1 className="mb-6 text-3xl font-bold text-gray-800 lg:text-4xl">
                            Ir al Paso 1: Seleccionar el Servicio de la Empresa
                        </h1>

                        {/* Left side content */}
                        <div className="flex flex-col items-start gap-8 lg:flex-row">
                            {/* Device mockup */}
                            <div className="flex-shrink-0">
                                <div className="h-80 w-64 rounded-lg border-4 border-gray-800 bg-white p-4 shadow-lg">
                                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 via-red-500 to-purple-600">
                                        {/* Mock interface elements */}
                                        <div className="absolute left-4 right-4 top-4">
                                            <div className="mb-3 rounded-lg bg-white p-3 shadow-sm">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded bg-blue-600"></div>
                                                    <div className="text-xs font-semibold">
                                                        Creacion de contenido
                                                    </div>
                                                </div>
                                                <div className="mb-1 text-xs text-gray-600">
                                                    El mejor sistema de Creacion
                                                    de contenido
                                                </div>
                                            </div>

                                            <div className="mb-2 rounded-lg bg-teal-500 p-2">
                                                <div className="text-xs font-semibold text-white">
                                                    Sitio Web
                                                </div>
                                                <div className="text-xs text-white opacity-90">
                                                    https://pryvonix.com
                                                </div>
                                            </div>

                                            <div className="rounded-lg bg-purple-600 p-2 text-center">
                                                <div className="text-xs font-semibold text-white">
                                                    Creacion de Contenido
                                                </div>
                                                <div className="text-xs text-white opacity-90">
                                                    para Caso de Exito
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="rounded-lg bg-orange-500 p-2 text-center">
                                                <div className="text-xs font-semibold text-white">
                                                    Clientes, Industria y
                                                    Servicios
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="mb-6 text-lg text-gray-600">
                                    Pasos para la creación del contenido
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side content */}
                    <div className="flex-1 lg:pl-8">
                        <div className="mb-6 rounded-lg bg-gray-200 p-8">
                            <h2 className="mb-4 text-xl font-semibold text-gray-800">
                                Convierte vuestros éxitos en contenido para
                                marketing y ventas
                            </h2>
                        </div>

                        <Link
                            href={route('content-generator.step-one')}
                            className="rounded-full bg-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-purple-700"
                        >
                            Iniciar Paso 1
                        </Link>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="space-y-6">
                    {/* Step 01 */}
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="relative flex-shrink-0">
                                <div
                                    style={{ backgroundColor: step.color }}
                                    className="flex h-20 w-20 items-center justify-center rounded-lg shadow-lg"
                                >
                                    <span className="text-2xl font-bold text-white">
                                        {index + 1}
                                    </span>
                                </div>
                                <div
                                    style={{ backgroundColor: step.color }}
                                    className="absolute -right-2 -top-2 h-6 w-6 rotate-45 transform"
                                ></div>
                            </div>

                            <div className="flex-1 rounded-lg bg-gray-200 p-6 shadow-sm">
                                <h3 className="mb-3 text-xl font-bold text-gray-800">
                                    {step.title}
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum is simply dummy text of the printing
                                    and typesetting.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
