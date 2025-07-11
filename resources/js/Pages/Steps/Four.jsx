import ProgressSteps from '@/Components/ProgressSteps';
import { Link, usePage } from '@inertiajs/react';
import { Building, Edit, RotateCcw, User } from 'lucide-react';
import { useState } from 'react';
// import { useState } from 'react';

export default function Four({
    company,
    web,
    clients,
    successes,
    previousStep,
}) {
    const [selectedContext, setSelectedContext] = useState([]);
    const localUrl = usePage().url;
    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: false },
        { id: 2, name: 'Clientes Potenciales', active: false },
        { id: 3, name: 'Éxitos del Servicio', active: false },
        { id: 4, name: 'Contextualización Industrial', active: true },
        { id: 5, name: 'Creación de Contenido', active: false },
    ];

    const contextualizations = [
        {
            industry: 'Arquitectura',
            subtitle: 'Contextualización por tamaño empresas',
            companies: [
                {
                    type: 'Pequeña Empresa',
                    description: 'Preocupación por la...',
                    icon: Building,
                },
                {
                    type: 'Gran Empresa',
                    description: 'Falta de...',
                    icon: Building,
                },
                {
                    type: 'Mediana',
                    description: 'Vista en...',
                    icon: Building,
                },
            ],
            decisors: [
                {
                    type: 'Responsable de Marketing',
                    description: 'Presupuestos no...',
                    icon: User,
                },
                {
                    type: 'Gerente',
                    description: 'Gerencia falta...',
                    icon: User,
                },
            ],
        },
        {
            industry: 'Banca',
            subtitle: 'Contextualización por tamaño empresas',
            companies: [
                {
                    type: 'Pequeña Empresa',
                    description: 'Preocupación por la...',
                    icon: Building,
                },
                {
                    type: 'Gran Empresa',
                    description: 'Falta de...',
                    icon: Building,
                },
                {
                    type: 'Mediana',
                    description: 'Vista en...',
                    icon: Building,
                },
            ],
            decisors: [
                {
                    type: 'Responsable de Marketing',
                    description: 'Presupuestos no...',
                    icon: User,
                },
                {
                    type: 'Gerente',
                    description: 'Gerencia falta...',
                    icon: User,
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with Progress Steps */}
            <ProgressSteps steps={steps} />

            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="mb-6 flex flex-col items-center">
                            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                                <div className="h-8 w-8 rounded bg-blue-600"></div>
                            </div>
                            <h3 className="font-semibold text-gray-900">
                                Paso 4
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Éxitos del Servicio
                            </p>
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="mb-6 rounded-lg bg-gray-100 p-4">
                                    <p className="text-gray-700">
                                        Descubre el contexto por Industria que
                                        se incluirá en el Contenido
                                    </p>
                                </div>

                                <div className="mb-8 flex gap-4">
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <Edit className="h-4 w-4" />
                                        Editar Contextualización
                                    </button>
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <RotateCcw className="h-4 w-4" />
                                        Repetir análisis
                                    </button>
                                </div>
                            </div>

                            {/* Contextualization Section */}
                            <div className="space-y-8">
                                {contextualizations.map((context, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-gray-100 pb-8 last:border-b-0"
                                    >
                                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                            {context.industry}
                                        </h3>
                                        <p className="mb-6 text-sm text-gray-600">
                                            {context.subtitle}
                                        </p>

                                        {/* Company Size Context */}
                                        <div className="mb-6 flex justify-around gap-4">
                                            {context.companies.map(
                                                (company, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="text-center"
                                                    >
                                                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                                            <company.icon className="h-6 w-6 text-gray-600" />
                                                        </div>
                                                        <p className="mb-1 text-xs text-gray-500">
                                                            {
                                                                company.description
                                                            }
                                                        </p>
                                                        <p className="text-sm font-medium text-blue-600">
                                                            {company.type}
                                                        </p>
                                                    </div>
                                                ),
                                            )}
                                        </div>

                                        {/* Decision Makers Context */}
                                        <div className="mb-4">
                                            <p className="mb-4 text-sm font-medium text-gray-700">
                                                Contextualización por decisores
                                            </p>
                                            <div className="flex justify-around gap-4">
                                                {context.decisors.map(
                                                    (decisor, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="text-center"
                                                        >
                                                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                                                <decisor.icon className="h-6 w-6 text-gray-600" />
                                                            </div>
                                                            <p className="mb-1 text-xs text-gray-500">
                                                                {
                                                                    decisor.description
                                                                }
                                                            </p>
                                                            <p className="text-sm font-medium text-blue-600">
                                                                {decisor.type}
                                                            </p>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 font-semibold text-gray-900">
                            Contextualización
                        </h3>

                        <p className="mb-6 text-sm text-gray-500">
                            Ningún servicio seleccionado
                        </p>

                        <div className="flex gap-2">
                            <Link
                                href={previousStep}
                                className="block w-full flex-1 rounded-lg border border-gray-300 px-4 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Anterior
                            </Link>
                            <Link
                                href={route('content-generator.step-four', {
                                    company,
                                    web,
                                    clients,
                                    successes,
                                    contextualizations: selectedContext.map(
                                        ({ name, description }) => ({
                                            name,
                                            description,
                                        }),
                                    ),
                                    previousStep: localUrl,
                                })}
                                onClick={(e) => {
                                    if (selectedContext.length === 0) {
                                        e.preventDefault();
                                    }
                                }}
                                className={`block w-full flex-1 rounded-lg px-4 py-3 text-center font-medium transition-colors ${
                                    selectedContext.length > 0
                                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                                        : 'cursor-not-allowed bg-gray-200 text-gray-400'
                                }`}
                            >
                                Siguiente
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
