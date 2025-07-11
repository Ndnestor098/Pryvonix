import ProgressSteps from '@/Components/ProgressSteps';
import { Head, Link, usePage } from '@inertiajs/react';
import { Check, Edit, RotateCcw, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Three({ company, web, clients, previousStep }) {
    const [selectedSuccesses, setSelectedSuccesses] = useState([]);
    const localUrl = usePage().url;

    const serviceSuccesses = [
        {
            id: 1,
            name: 'Miro Service',
            description: 'Descripción',
            selected: false,
        },
        {
            id: 2,
            name: 'Miro Service',
            description: 'Descripción',
            selected: false,
        },
        {
            id: 3,
            name: 'Miro Service',
            description: 'Descripción',
            selected: false,
        },
        {
            id: 4,
            name: 'Miro Service',
            description: 'Descripción',
            selected: false,
        },
    ];

    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: false },
        { id: 2, name: 'Clientes Potenciales', active: false },
        { id: 3, name: 'Éxitos del Servicio', active: true },
        { id: 4, name: 'Contextualización Industrial', active: false },
        { id: 5, name: 'Creación de Contenido', active: false },
    ];

    const toggleSuccessSelection = (successId) => {
        setSelectedSuccesses((prev) =>
            prev.includes(successId)
                ? prev.filter((id) => id !== successId)
                : [...prev, successId],
        );
    };

    const selectedSuccessData = serviceSuccesses.filter((client) =>
        selectedSuccesses.includes(client.id),
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Paso 3" />
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
                                Paso 3
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
                                        Añade los Éxitos del Servicio
                                    </p>
                                </div>

                                <div className="mb-8 flex gap-4">
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <Edit className="h-4 w-4" />
                                        Editar Éxitos
                                    </button>
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <RotateCcw className="h-4 w-4" />
                                        Repetir análisis
                                    </button>
                                </div>
                            </div>

                            {/* Success Stories Section */}
                            <div>
                                <div className="mb-6">
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                        Éxitos relacionados con resultados
                                        conseguidos
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Mensajes que se incluirán en el
                                        contenido sobre beneficios de vuestros
                                        clientes
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {serviceSuccesses.map((success) => (
                                        <div
                                            key={success.id}
                                            className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                                                    <TrendingUp className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-blue-600">
                                                        {success.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-600">
                                                        {success.description}
                                                    </p>
                                                    <button className="mt-1 flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                                                        <Edit className="h-3 w-3" />
                                                        Editar
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() =>
                                                    toggleSuccessSelection(
                                                        success.id,
                                                    )
                                                }
                                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${
                                                    selectedSuccesses.includes(
                                                        success.id,
                                                    )
                                                        ? 'border-green-600 bg-green-600 text-white'
                                                        : 'border-gray-300 hover:border-green-600'
                                                }`}
                                            >
                                                {selectedSuccesses.includes(
                                                    success.id,
                                                ) ? (
                                                    <Check className="h-4 w-4" />
                                                ) : null}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 font-semibold text-gray-900">
                            Éxitos del Servicio
                        </h3>

                        {selectedSuccesses.length > 0 ? (
                            <div className="mb-6">
                                <p className="mb-2 text-sm text-gray-600">
                                    {selectedSuccesses.length} éxito
                                    {selectedSuccesses.length !== 1
                                        ? 's'
                                        : ''}{' '}
                                    seleccionado
                                    {selectedSuccesses.length !== 1
                                        ? 's'
                                        : ''}{' '}
                                </p>
                            </div>
                        ) : (
                            <p className="mb-6 text-sm text-gray-500">
                                Ningún éxito seleccionado
                            </p>
                        )}

                        <div className="flex gap-2">
                            <Link
                                href={previousStep}
                                className="block w-full flex-1 rounded-lg border border-gray-300 px-4 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Anterior
                            </Link>
                            <Link
                                href={route('content-generator.step-three', {
                                    company,
                                    web,
                                    clients,
                                    successes: selectedSuccessData.map(
                                        ({ name, description }) => ({
                                            name,
                                            description,
                                        }),
                                    ),
                                    previousStep: localUrl,
                                })}
                                onClick={(e) => {
                                    if (selectedSuccessData.length === 0) {
                                        e.preventDefault();
                                    }
                                }}
                                className={`block w-full flex-1 rounded-lg px-4 py-3 text-center font-medium transition-colors ${
                                    selectedSuccessData.length > 0
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
