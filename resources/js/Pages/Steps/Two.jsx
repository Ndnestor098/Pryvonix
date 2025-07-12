import ProgressSteps from '@/Components/ProgressSteps';
import { Head, Link, router } from '@inertiajs/react';
import { Building, Edit, Plus, RotateCcw, Users } from 'lucide-react';
import { useState } from 'react';

const handleClick = async (e, selectedClientData) => {
    e.preventDefault();

    if (selectedClientData.length === 0) return;

    try {
        const response = await axios.post(
            route('content-generator.store-step-data'),
            {
                clients: selectedClientData.map(({ name, service }) => ({
                    name,
                    service,
                })),
            },
            {
                withCredentials: true,
            },
        );

        if (response.status === 200) {
            router.visit(route('content-generator.step-three'));
        }
    } catch (error) {
        console.error('Error al guardar los datos temporales:', error);
    }
};

export default function Two() {
    const [selectedClients, setSelectedClients] = useState([]);

    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: false },
        { id: 2, name: 'Clientes Potenciales', active: true },
        { id: 3, name: 'Éxitos del Servicio', active: false },
        { id: 4, name: 'Contextualización Industrial', active: false },
        { id: 5, name: 'Creación de Contenido', active: false },
    ];

    const potentialClients = [
        {
            id: 1,
            name: 'Arquitectura',
            service: 'Servicio de Arquitectura',
            sizes: ['Pequeña Empresa', 'Mediana', 'Gran Empresa'],
            connection: 'La conexión es debido a la naturaleza del servicio',
            icon: '🏗️',
        },
        {
            id: 2,
            name: 'Banca',
            service: 'Servicio de Banca',
            sizes: ['Pequeña Empresa', 'Mediana', 'Gran Empresa'],
            connection: 'La conexión es debido a la naturaleza del servicio',
            icon: '🏦',
        },
        {
            id: 3,
            name: 'Contabilidad',
            service: 'Servicio de Contabilidad',
            sizes: ['Pequeña Empresa', 'Mediana', 'Gran Empresa'],
            connection: 'La conexión es debido a la naturaleza del servicio',
            icon: '📊',
        },
        {
            id: 4,
            name: 'Derecho',
            service: 'Servicio de Derecho',
            sizes: ['Pequeña Empresa', 'Mediana', 'Gran Empresa'],
            connection: 'La conexión es debido a la naturaleza del servicio',
            icon: '⚖️',
        },
    ];

    const toggleClientSelection = (clientId) => {
        setSelectedClients((prev) =>
            prev.includes(clientId)
                ? prev.filter((id) => id !== clientId)
                : [...prev, clientId],
        );
    };

    const selectedClientData = potentialClients.filter((client) =>
        selectedClients.includes(client.id),
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Paso 2" />

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
                                Paso 2
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Clientes Potenciales
                            </p>
                        </div>
                        {/* Sidebar Navigation */}
                        <div className="mb-8 flex w-full gap-8">
                            <div className="flex w-full flex-col gap-2">
                                <button className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-2 text-left">
                                    <Building className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                        Clientes por Industrias
                                    </span>
                                </button>
                                <button className="flex items-center gap-3 rounded-lg px-4 py-2 text-left text-gray-600 hover:bg-gray-50">
                                    <Users className="h-4 w-4" />
                                    <span className="text-sm">
                                        Clientes por Decisores
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="mb-6 rounded-lg bg-gray-100 p-4">
                                    <p className="text-gray-700">
                                        Confirma los clientes a los que se
                                        dirigirá el contenido
                                    </p>
                                </div>

                                <div className="mb-8 flex gap-4">
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <Edit className="h-4 w-4" />
                                        Editar Clientes
                                    </button>
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <RotateCcw className="h-4 w-4" />
                                        Repetir análisis
                                    </button>
                                </div>
                            </div>

                            {/* Clients Section */}
                            <div>
                                <div className="mb-6">
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                        Clientes Potenciales
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Industrias receptivas al servicio MIRO
                                        de Ariage
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {potentialClients.map((client) => (
                                        <div
                                            key={client.id}
                                            className="rounded-lg border border-gray-200 p-6"
                                        >
                                            <div className="mb-4 flex items-start justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
                                                        {client.icon}
                                                    </div>

                                                    <div>
                                                        <div className="mb-1 flex items-center gap-2">
                                                            <span className="text-xs text-gray-500">
                                                                Pequeña Empresa
                                                            </span>
                                                            <span className="text-xs text-gray-300">
                                                                •
                                                            </span>
                                                            <span className="text-xs text-gray-500">
                                                                Mediana
                                                            </span>
                                                            <span className="text-xs text-gray-300">
                                                                •
                                                            </span>
                                                            <span className="text-xs text-gray-500">
                                                                Gran Empresa
                                                            </span>
                                                        </div>
                                                        <h4 className="text-lg font-semibold text-blue-600">
                                                            {client.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            {client.service}
                                                        </p>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() =>
                                                        toggleClientSelection(
                                                            client.id,
                                                        )
                                                    }
                                                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${
                                                        selectedClients.includes(
                                                            client.id,
                                                        )
                                                            ? 'border-blue-600 bg-blue-600 text-white'
                                                            : 'border-gray-300 hover:border-blue-600'
                                                    }`}
                                                >
                                                    {selectedClients.includes(
                                                        client.id,
                                                    ) ? (
                                                        <svg
                                                            className="h-4 w-4"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <Plus className="h-4 w-4 text-gray-400" />
                                                    )}
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm">
                                                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100">
                                                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                                                </div>
                                                <span className="font-medium text-gray-700">
                                                    Conexión con el Servicio de
                                                    la Empresa
                                                </span>
                                            </div>
                                            <p className="ml-6 mt-1 text-sm text-green-600">
                                                {client.connection}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 font-semibold text-gray-900">
                            Clientes Seleccionados
                        </h3>

                        {selectedClients.length > 0 ? (
                            <div className="mb-6">
                                <p className="mb-2 text-sm text-gray-600">
                                    {selectedClients.length} cliente
                                    {selectedClients.length !== 1
                                        ? 's'
                                        : ''}{' '}
                                    seleccionado
                                    {selectedClients.length !== 1 ? 's' : ''}
                                </p>
                                <div className="space-y-2">
                                    {selectedClients.map((clientId) => {
                                        const client = potentialClients.find(
                                            (c) => c.id === clientId,
                                        );
                                        return (
                                            <div
                                                key={clientId}
                                                className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700"
                                            >
                                                {client?.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <p className="mb-6 text-sm text-gray-500">
                                Ningún cliente seleccionado
                            </p>
                        )}

                        <div className="flex gap-2">
                            <Link
                                href={route('content-generator.step-one')}
                                className="block w-full flex-1 rounded-lg border border-gray-300 px-4 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Anterior
                            </Link>
                            <button
                                onClick={(e) =>
                                    handleClick(e, selectedClientData)
                                }
                                className={`w-full flex-1 rounded-lg px-4 py-3 text-center font-medium transition-colors ${
                                    selectedClientData.length > 0
                                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                                        : 'cursor-not-allowed bg-gray-200 text-gray-400'
                                }`}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
