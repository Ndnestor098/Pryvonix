import ProgressSteps from '@/Components/ProgressSteps';
import { Head, router } from '@inertiajs/react';
import { FileText } from 'lucide-react';

export default function Confirmation({
    step,
    company,
    web,
    clients,
    successes,
    context,
}) {
    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: false },
        { id: 2, name: 'Clientes Potenciales', active: false },
        { id: 3, name: 'Éxitos del Servicio', active: false },
        { id: 4, name: 'Contextualización Industrial', active: false },
        { id: 5, name: 'Creación de Contenido', active: false },
    ];

    const getStepLabel = (step) => {
        switch (String(step)) {
            case '1':
                return 'Seleccionar Servicio';
            case '2':
                return 'Clientes Potenciales';
            case '3':
                return 'Éxitos del Servicio';
            case '4':
                return 'Contextualización Industrial';
            case '5':
                return 'Creación de Contenido';
            default:
                return '';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title={'Confirmacion de Paso ' + step} />

            {/* Header with Progress Steps */}
            <ProgressSteps steps={steps} confirmation={[step, true]} />

            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                            {/* Explanation Section */}
                            <div className="mb-8">
                                <div className="relative mb-6 rounded-lg border border-gray-200 bg-white p-6">
                                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                                        <span className="text-sm font-medium text-gray-600">
                                            {step}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Explicación del Siguiente Paso
                                    </h2>
                                </div>

                                {/* Next Step Card */}
                                <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                                            <FileText className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                Paso {step}:{' '}
                                                {getStepLabel(step)}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-600">
                                                Genera contenido personalizado
                                                basado en tus selecciones
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Section */}
                            <div>
                                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                                    Resumen de Pasos Anteriores
                                </h3>

                                <div className="space-y-4">
                                    {/* Step 1 Summary */}
                                    {step > 0 && (
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <div className="mb-2 flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                                    <span className="text-xs font-medium text-white">
                                                        1
                                                    </span>
                                                </div>
                                                <h4 className="font-medium text-gray-900">
                                                    Paso 1: Seleccionar Servicio
                                                </h4>
                                            </div>
                                            <p className="ml-9 text-sm text-gray-700">
                                                Nombre de la empresa: {company}
                                                <br />
                                                Sitio wed: {web}
                                            </p>
                                        </div>
                                    )}

                                    {/* Step 2 Summary */}
                                    {step >= 2 && (
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <div className="mb-2 flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                                    <span className="text-xs font-medium text-white">
                                                        2
                                                    </span>
                                                </div>
                                                <h4 className="font-medium text-gray-900">
                                                    Paso 2: Clientes Potenciales
                                                </h4>
                                            </div>
                                            <div className="ml-9">
                                                {clients.map(
                                                    (client, index) => (
                                                        <>
                                                            <p
                                                                key={index}
                                                                className="text-sm text-gray-700"
                                                            >
                                                                Nombre de
                                                                industria:{' '}
                                                                {client.name}
                                                                <br />
                                                                Servicio:{' '}
                                                                {client.service}
                                                            </p>
                                                            {index !==
                                                                clients.length -
                                                                    1 && <br />}
                                                        </>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3 Summary */}
                                    {step >= 3 && (
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <div className="mb-2 flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                                    <span className="text-xs font-medium text-white">
                                                        3
                                                    </span>
                                                </div>
                                                <h4 className="font-medium text-gray-900">
                                                    Paso 3: Éxitos del Servicio
                                                </h4>
                                            </div>
                                            <div className="ml-9">
                                                {successes.map(
                                                    (success, index) => (
                                                        <>
                                                            <p
                                                                key={index}
                                                                className="text-sm text-gray-700"
                                                            >
                                                                Nombre del
                                                                Exito:{' '}
                                                                {success.name}
                                                                <br />
                                                                Descripcion:{' '}
                                                                {
                                                                    success.description
                                                                }
                                                            </p>
                                                            {index !==
                                                                clients.length -
                                                                    1 && <br />}
                                                        </>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 4 Summary */}
                                    {step >= 4 && (
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <div className="mb-2 flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                                    <span className="text-xs font-medium text-white">
                                                        4
                                                    </span>
                                                </div>
                                                <h4 className="font-medium text-gray-900">
                                                    Paso 4: Contextualización
                                                    Industrial
                                                </h4>
                                            </div>
                                            <div className="ml-9">
                                                <p className="text-sm text-gray-700">
                                                    Industria:{' '}
                                                    {context.industry}
                                                    <br />
                                                    Tamaño de industria:{' '}
                                                    {context.companies.type}
                                                    <br />
                                                    Descripcion:{' '}
                                                    {
                                                        context.companies
                                                            .description
                                                    }
                                                    <br />
                                                    {context.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                        <h3 className="mb-4 font-semibold text-gray-900">
                            Iniciar Paso {step}
                        </h3>

                        <p className="mb-6 text-sm text-gray-500">
                            Revisa el resumen y procede a la creación de
                            contenido
                        </p>

                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    switch (step) {
                                        case '1':
                                            router.visit(
                                                route(
                                                    'content-generator.step-one',
                                                ),
                                            );
                                            break;
                                        case '2':
                                            router.visit(
                                                route(
                                                    'content-generator.step-two',
                                                ),
                                            );
                                            break;
                                        case '3':
                                            router.visit(
                                                route(
                                                    'content-generator.step-three',
                                                ),
                                            );
                                            break;
                                        case '4':
                                            router.visit(
                                                route(
                                                    'content-generator.step-four',
                                                ),
                                            );
                                            break;
                                        default:
                                            break;
                                    }
                                }}
                                className="flex-1 rounded-lg border border-gray-300 px-1 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Paso Anterior
                            </button>
                            <button
                                onClick={() => {
                                    switch (step) {
                                        case '1':
                                            router.visit(
                                                route(
                                                    'content-generator.step-two',
                                                ),
                                            );
                                            break;
                                        case '2':
                                            router.visit(
                                                route(
                                                    'content-generator.step-three',
                                                ),
                                            );
                                            break;
                                        case '3':
                                            router.visit(
                                                route(
                                                    'content-generator.step-four',
                                                ),
                                            );
                                            break;
                                        case '4':
                                            router.visit(
                                                route(
                                                    'content-generator.step-five',
                                                ),
                                            );
                                            break;
                                        default:
                                            break;
                                    }
                                }}
                                className="flex-1 rounded-lg bg-purple-600 px-1 py-3 font-medium text-white transition-colors hover:bg-purple-700"
                            >
                                Pasar al Paso {parseInt(step) + 1}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
