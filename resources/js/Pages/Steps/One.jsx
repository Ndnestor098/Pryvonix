import ProgressSteps from '@/Components/ProgressSteps';
import { Head, router } from '@inertiajs/react';
import { Edit, ExternalLink, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const handleClick = async (e, services, selectedService) => {
    e.preventDefault();

    if (services.length === 0) return;

    try {
        const response = await axios.post(
            route('content-generator.store-step-data'),
            {
                company: services.find((s) => s.id === selectedService)?.name,
                web: services.find((s) => s.id === selectedService)?.url,
            },
            {
                withCredentials: true,
            },
        );

        if (response.status === 200) {
            router.visit(route('content-generator.confirmation', { step: 1 }));
        }
    } catch (error) {
        console.error('Error al guardar los datos temporales:', error);
    }
};

export default function One() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            name: 'Miro Service',
            url: 'https://miroservice',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        },
        {
            id: 2,
            name: 'Derecho Comparado',
            url: 'https://derechocomparado',
            image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        },
        {
            id: 3,
            name: 'Asesoría y Gestoría',
            url: 'https://asesoriaygestoria',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        },
        {
            id: 4,
            name: 'Arquitectura',
            url: 'https://arquitectura',
            image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        },
        {
            id: 5,
            name: 'Planificación Fiscal',
            url: 'https://planificacionfiscal',
            image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        },
    ];

    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: true },
        { id: 2, name: 'Clientes Potenciales', active: false },
        { id: 3, name: 'Éxitos del Servicio', active: false },
        { id: 4, name: 'Contextualización Industrial', active: false },
        { id: 5, name: 'Creación de Contenido', active: false },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Paso 1" />
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
                                Paso 1
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Seleccionar Servicio
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
                                        Selecciona{' '}
                                        <span className="font-semibold">1</span>
                                        servicio para crear Contenido
                                    </p>
                                </div>

                                <div className="mb-8 flex gap-4">
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <Edit className="h-4 w-4" />
                                        Editar Servicios
                                    </button>
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <RotateCcw className="h-4 w-4" />
                                        Repetir análisis
                                    </button>
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="space-y-8">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="border-b border-gray-100 pb-8 last:border-b-0"
                                    >
                                        <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                            {service.name}
                                        </h3>

                                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={service.image}
                                                    alt={service.name}
                                                    className="h-12 w-12 rounded-lg object-cover"
                                                />
                                                <div>
                                                    <h4 className="font-medium text-gray-900">
                                                        {service.name}
                                                    </h4>
                                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                                        <span>
                                                            {service.url}
                                                        </span>
                                                    </div>
                                                    <button className="mt-1 flex text-xs text-blue-600 hover:text-blue-700">
                                                        <ExternalLink className="h-3 w-3" />
                                                        Editar
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() =>
                                                    setSelectedService(
                                                        service.id,
                                                    )
                                                }
                                                className={`rounded-full border-2 px-6 py-2 font-medium transition-colors ${
                                                    selectedService ===
                                                    service.id
                                                        ? 'border-blue-600 bg-blue-600 text-white'
                                                        : 'border-blue-600 bg-white text-blue-600 hover:bg-blue-50'
                                                }`}
                                            >
                                                Seleccionar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 font-semibold text-gray-900">
                            Servicio Seleccionado
                        </h3>

                        {selectedService ? (
                            <div className="mb-6">
                                <p className="mb-4 text-sm text-gray-600">
                                    {
                                        services.find(
                                            (s) => s.id === selectedService,
                                        )?.name
                                    }
                                </p>
                            </div>
                        ) : (
                            <p className="mb-6 text-sm text-gray-500">
                                Ningún servicio seleccionado
                            </p>
                        )}

                        <button
                            onClick={(e) =>
                                handleClick(e, services, selectedService)
                            }
                            className={`w-full rounded-lg px-4 py-3 text-center font-medium transition-colors ${
                                selectedService
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
    );
}
