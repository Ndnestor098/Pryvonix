import React, { useState } from 'react';
import { Edit, RotateCcw, ExternalLink, Users, Building, Plus, Check, TrendingUp, User } from 'lucide-react';

export default function Three() {
    const [selectedSuccesses, setSelectedSuccesses] = useState([]);

    const serviceSuccesses = [
        {
        id: 1,
        name: "Miro Service",
        description: "Descripción",
        selected: false
        },
        {
        id: 2,
        name: "Miro Service",
        description: "Descripción",
        selected: false
        },
        {
        id: 3,
        name: "Miro Service",
        description: "Descripción",
        selected: false
        },
        {
        id: 4,
        name: "Miro Service",
        description: "Descripción",
        selected: false
        }
    ];

    const steps = [
        { id: 1, name: "Seleccionar Servicio", active: false},
        { id: 2, name: "Clientes Potenciales", active: false },
        { id: 3, name: "Éxitos del Servicio", active: true },
        { id: 4, name: "Contextualización Industrial", active: false },
        { id: 5, name: "Creación de Contenido", active: false }
    ];

    const toggleSuccessSelection = (successId) => {
        setSelectedSuccesses(prev => 
        prev.includes(successId) 
            ? prev.filter(id => id !== successId)
            : [...prev, successId]
        );
    };

    const renderStep3 = () => (
        <>
        {/* Main Content */}
        <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <p className="text-gray-700">
                    Añade los Éxitos del Servicio
                </p>
                </div>
                
                <div className="flex gap-4 mb-8">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                    Editar Éxitos
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <RotateCcw className="w-4 h-4" />
                    Repetir análisis
                </button>
                </div>
            </div>

            {/* Success Stories Section */}
            <div>
                <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Éxitos relacionados con resultados conseguidos</h3>
                <p className="text-sm text-gray-600">Mensajes que se incluirán en el contenido sobre beneficios de vuestros clientes</p>
                </div>

                <div className="space-y-4">
                {serviceSuccesses.map((success) => (
                    <div key={success.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                        <h4 className="font-medium text-blue-600">{success.name}</h4>
                        <p className="text-sm text-gray-600">{success.description}</p>
                        <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-1">
                            <Edit className="w-3 h-3" />
                            Editar
                        </button>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => toggleSuccessSelection(success.id)}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                        selectedSuccesses.includes(success.id)
                            ? 'bg-green-600 border-green-600 text-white'
                            : 'border-gray-300 hover:border-green-600'
                        }`}
                    >
                        {selectedSuccesses.includes(success.id) ? (
                        <Check className="w-4 h-4" />
                        ) : null}
                    </button>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Éxitos del Servicio</h3>
            
            {selectedSuccesses.length > 0 ? (
            <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">
                {selectedSuccesses.length} éxito{selectedSuccesses.length !== 1 ? 's' : ''} seleccionado{selectedSuccesses.length !== 1 ? 's' : ''}
                </p>
            </div>
            ) : (
            <p className="text-sm text-gray-500 mb-6">Ningún éxito seleccionado</p>
            )}
            
            <div className="flex gap-2">
            <button 
                className="flex-1 py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
                Paso Anterior
            </button>
            <button 
                className="flex-1 py-3 px-4 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
                Siguiente
            </button>
            </div>
        </div>
        </>
    );

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Header with Progress Steps */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
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
                        <Check className="w-4 h-4" />
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

        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex gap-8">
            {/* Left Sidebar */}
            <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <h3 className="font-semibold text-gray-900">Paso 3</h3>
                <p className="text-sm text-gray-600 text-center">
                    Éxitos del Servicio
                </p>
                </div>
            </div>

            {renderStep3()}
            </div>
        </div>
        </div>
    );
}