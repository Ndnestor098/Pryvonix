import ProgressSteps from '@/Components/ProgressSteps';
import { Head } from '@inertiajs/react';
import { Edit, Eye, MoreHorizontal, Plus, X } from 'lucide-react';

export default function View() {
    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: false },
        { id: 2, name: 'Clientes Potenciales', active: false },
        { id: 3, name: 'Éxitos del Servicio', active: false },
        { id: 4, name: 'Contextualización Industrial', active: false },
        { id: 5, name: 'Creación de Contenido', active: false },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Resultado Final" />

            {/* Progress Steps */}
            <ProgressSteps steps={steps} confirmAllSteps={true} />

            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="w-64 border-r border-gray-200 bg-white p-6">
                        {/* Header with Logo */}
                        <div className="mb-8">
                            <div className="relative mb-4 flex h-16 w-full items-center justify-center overflow-hidden rounded-lg bg-orange-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                                <div className="relative z-10 text-lg font-bold text-white">
                                    RESULTADOS DIGITALES
                                </div>
                                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white">
                                    <Edit className="h-3 w-3 text-orange-500" />
                                </div>
                                <div className="absolute bottom-1 left-2 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600">
                                    <span className="text-xs font-bold text-white">
                                        A
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="mb-8">
                            <h2 className="mb-1 text-xl font-bold text-gray-900">
                                Arquitectura
                            </h2>

                            <p className="mb-4 text-sm text-gray-600">
                                26 seguidores
                            </p>

                            <div className="mb-6 space-y-2">
                                <button className="flex w-full items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700">
                                    <Plus className="h-4 w-4" />
                                    Crear
                                </button>
                                <button className="flex w-full items-center gap-2 rounded-lg border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                                    <Eye className="h-4 w-4" />
                                    Ver como miembro
                                </button>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <nav className="mb-8 space-y-1">
                            <button className="w-full rounded-lg border-l-4 border-blue-600 bg-blue-50 px-3 py-2 text-left text-sm font-medium text-blue-600">
                                Caso de Éxito
                            </button>
                            <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50">
                                Panel de control
                            </button>
                        </nav>

                        {/* Bottom Info */}
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600">
                                Obten 6,7 veces más seguidores
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 rounded bg-orange-400"></div>
                                <span className="text-sm text-gray-600">
                                    Panel de control Premium
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-8">
                        {/* Header Navigation */}
                        <div className="mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="text-sm text-gray-600 hover:text-gray-800">
                                    Paso Anterior
                                </button>
                                <span className="text-gray-300">|</span>
                                <span className="text-sm font-medium text-gray-900">
                                    Paso 5
                                </span>
                            </div>
                        </div>

                        <div className="max-w-4xl">
                            {/* Introduction Section */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Introducción
                                </h2>
                                <p className="mb-8 text-gray-600">
                                    Las páginas que completan estas acciones
                                    aumentan 4 veces más rápido
                                </p>

                                {/* Location Cards */}
                                <div className="space-y-4">
                                    <div className="relative rounded-lg bg-gray-50 p-6">
                                        <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                                            <X className="h-5 w-5" />
                                        </button>
                                        <h3 className="mb-2 font-semibold text-gray-900">
                                            Añadir ubicación
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-600">
                                            Añade una ubicación y ayuda a los
                                            miembros a encontrarte más
                                            fácilmente cuando busquen páginas en
                                            función de la ubicación.
                                        </p>
                                    </div>

                                    <div className="relative rounded-lg bg-gray-50 p-6">
                                        <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                                            <X className="h-5 w-5" />
                                        </button>
                                        <h3 className="mb-2 font-semibold text-gray-900">
                                            Añadir ubicación
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-600">
                                            Añade una ubicación y ayuda a los
                                            miembros a encontrarte más
                                            fácilmente cuando busquen páginas.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Problem Section */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Problema
                                </h2>
                                <p className="mb-8 text-gray-600">
                                    Las páginas que completan estas acciones
                                    aumentan 4 veces más rápido
                                </p>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="rounded-lg border border-gray-200 bg-white p-6">
                                        <div className="mb-2 text-4xl font-bold text-gray-900">
                                            1
                                        </div>
                                        <div className="mb-2 text-sm font-medium text-blue-600">
                                            Apariciones en búsquedas
                                        </div>
                                        <div className="text-sm font-medium text-red-500">
                                            ▼50 % últimos 7 días
                                        </div>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 bg-white p-6">
                                        <div className="mb-2 text-4xl font-bold text-gray-900">
                                            0
                                        </div>
                                        <div className="mb-2 text-sm font-medium text-blue-600">
                                            Nuevos seguidores
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            No es pertinente
                                        </div>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 bg-white p-6">
                                        <div className="mb-2 text-4xl font-bold text-gray-900">
                                            0
                                        </div>
                                        <div className="mb-2 text-sm font-medium text-blue-600">
                                            Nuevos seguidores
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            No es pertinente
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Use Case Section */}
                            <section>
                                <div className="mb-6 flex items-start justify-between">
                                    <div>
                                        <h2 className="mb-2 text-2xl font-bold text-gray-900">
                                            Caso de Uso
                                        </h2>
                                        <p className="text-gray-600">
                                            Las páginas que completan estas
                                            acciones aumentan 4 veces más rápido
                                        </p>
                                    </div>
                                    <button className="p-2 text-gray-400 hover:text-gray-600">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-6">
                                    <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                                        Programar
                                    </button>
                                    <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                        <img
                                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                                            alt="Profile"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 border-l border-gray-200 bg-white p-6">
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">
                            Contenido
                        </h3>

                        <p className="mb-6text-sm text-gray-500">
                            Ningún servicio seleccionado
                        </p>

                        <button className="w-full rounded-lg bg-purple-600 px-4 py-3 font-medium text-white transition-colors hover:bg-purple-700">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
