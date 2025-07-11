import React, { useState } from 'react';
import { Edit, RotateCcw, ExternalLink, Users, Building, Plus } from 'lucide-react';
import { Link } from '@inertiajs/react';

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
        name: "Arquitectura",
        service: "Servicio de Arquitectura",
        sizes: ["Pequeña Empresa", "Mediana", "Gran Empresa"],
        connection: "La conexión es debido a la naturaleza del servicio",
        icon: "🏗️"
        },
        {
        id: 2,
        name: "Banca",
        service: "Servicio de Banca",
        sizes: ["Pequeña Empresa", "Mediana", "Gran Empresa"],
        connection: "La conexión es debido a la naturaleza del servicio",
        icon: "🏦"
        },
        {
        id: 3,
        name: "Contabilidad",
        service: "Servicio de Contabilidad",
        sizes: ["Pequeña Empresa", "Mediana", "Gran Empresa"],
        connection: "La conexión es debido a la naturaleza del servicio",
        icon: "📊"
        },
        {
        id: 4,
        name: "Derecho",
        service: "Servicio de Derecho",
        sizes: ["Pequeña Empresa", "Mediana", "Gran Empresa"],
        connection: "La conexión es debido a la naturaleza del servicio",
        icon: "⚖️"
        }
    ];

    const toggleClientSelection = (clientId) => {
        setSelectedClients(prev => 
        prev.includes(clientId) 
            ? prev.filter(id => id !== clientId)
            : [...prev, clientId]
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with Progress Steps */}
            <div className="border-b border-gray-200 bg-white px-6 py-4">
                <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                    <span className="text-sm text-gray-600">Panel de Control</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                
                {/* Progress Steps */}
                <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                        <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-blue-500 text-white' :
                            step.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
                        }`}>
                            {step.completed ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            ) : (
                            step.id
                            )}
                        </div>
                        <span className={`text-xs mt-1 ${
                            step.active ? 'text-blue-600 font-medium' : 'text-gray-400'
                        }`}>
                            {step.name}
                        </span>
                        </div>
                        {index < steps.length - 1 && (
                        <div className={`w-16 h-0.5 mx-4 ${
                            step.completed || step.active ? 'bg-blue-500' : 'bg-gray-200'
                        }`}></div>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                            </div>
                            <h3 className="font-semibold text-gray-900">Paso 2</h3>
                            <p className="text-sm text-gray-600 text-center">
                                Clientes Potenciales
                            </p>
                        </div>
                        {/* Sidebar Navigation */}
                        <div className="flex w-full gap-8 mb-8">
                            <div className="flex flex-col w-full gap-2">
                                <button className="flex items-center gap-3 px-4 py-2 text-left bg-gray-100 rounded-lg">
                                    <Building className="w-4 h-4" />
                                    <span className="text-sm font-medium">Clientes por Industrias</span>
                                </button>
                                <button className="flex items-center gap-3 px-4 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                                    <Users className="w-4 h-4" />
                                    <span className="text-sm">Clientes por Decisores</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="bg-gray-100 rounded-lg p-4 mb-6">
                            <p className="text-gray-700">
                                Confirma los clientes a los que se dirigirá el contenido
                            </p>
                            </div>
                            
                            <div className="flex gap-4 mb-8">
                            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                <Edit className="w-4 h-4" />
                                Editar Clientes
                            </button>
                            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                <RotateCcw className="w-4 h-4" />
                                Repetir análisis
                            </button>
                            </div>
                        </div>

                        {/* Clients Section */}
                        <div>
                            <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clientes Potenciales</h3>
                            <p className="text-sm text-gray-600">Industrias receptivas al servicio MIRO de Ariage</p>
                            </div>

                            <div className="space-y-6">
                            {potentialClients.map((client) => (
                                <div key={client.id} className="border border-gray-200 rounded-lg p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                                        {client.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs text-gray-500">Pequeña Empresa</span>
                                        <span className="text-xs text-gray-300">•</span>
                                        <span className="text-xs text-gray-500">Mediana</span>
                                        <span className="text-xs text-gray-300">•</span>
                                        <span className="text-xs text-gray-500">Gran Empresa</span>
                                        </div>
                                        <h4 className="font-semibold text-blue-600 text-lg">{client.name}</h4>
                                        <p className="text-sm text-gray-600">{client.service}</p>
                                    </div>
                                    </div>
                                    
                                    <button 
                                    onClick={() => toggleClientSelection(client.id)}
                                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                                        selectedClients.includes(client.id)
                                        ? 'bg-blue-600 border-blue-600 text-white'
                                        : 'border-gray-300 hover:border-blue-600'
                                    }`}
                                    >
                                    {selectedClients.includes(client.id) ? (
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <Plus className="w-4 h-4 text-gray-400" />
                                    )}
                                    </button>
                                </div>
                                
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <span className="font-medium text-gray-700">Conexión con el Servicio de la Empresa</span>
                                </div>
                                <p className="text-sm text-green-600 mt-1 ml-6">{client.connection}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Clientes Seleccionados</h3>
                        
                        {selectedClients.length > 0 ? (
                            <div className="mb-6">
                                <p className="text-sm text-gray-600 mb-2">
                                {selectedClients.length} cliente{selectedClients.length !== 1 ? 's' : ''} seleccionado{selectedClients.length !== 1 ? 's' : ''}
                                </p>
                                <div className="space-y-2">
                                {selectedClients.map(clientId => {
                                        const client = potentialClients.find(c => c.id === clientId);
                                        return (
                                            <div key={clientId} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                                {client?.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                        <p className="text-sm text-gray-500 mb-6">Ningún cliente seleccionado</p>
                        )}
                        
                        <div className="flex gap-2">
                            <Link
                                href={route('content-generator.step-one')}
                                className="flex-1 block w-full text-center py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Paso Anterior
                            </Link>
                            <Link

                                className="flex-1 block w-full text-center py-3 px-4 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
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
