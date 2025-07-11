import React, { useState } from 'react';
import { Edit, RotateCcw, ExternalLink, Users, Building, Plus, Check, TrendingUp, User } from 'lucide-react';

export default function Four() {

    const steps = [
        { id: 1, name: "Seleccionar Servicio", active: false},
        { id: 2, name: "Clientes Potenciales", active: false },
        { id: 3, name: "Éxitos del Servicio", active: false },
        { id: 4, name: "Contextualización Industrial", active: true },
        { id: 5, name: "Creación de Contenido", active: false }
    ];

    const contextualizations = [
    {
      industry: "Arquitectura",
      subtitle: "Contextualización por tamaño empresas",
      companies: [
        { type: "Pequeña Empresa", description: "Preocupación por la...", icon: Building },
        { type: "Gran Empresa", description: "Falta de...", icon: Building },
        { type: "Mediana", description: "Vista en...", icon: Building }
      ],
      decisors: [
        { type: "Responsable de Marketing", description: "Presupuestos no...", icon: User },
        { type: "Gerente", description: "Gerencia falta...", icon: User }
      ]
    },
    {
      industry: "Banca",
      subtitle: "Contextualización por tamaño empresas",
      companies: [
        { type: "Pequeña Empresa", description: "Preocupación por la...", icon: Building },
        { type: "Gran Empresa", description: "Falta de...", icon: Building },
        { type: "Mediana", description: "Vista en...", icon: Building }
      ],
      decisors: [
        { type: "Responsable de Marketing", description: "Presupuestos no...", icon: User },
        { type: "Gerente", description: "Gerencia falta...", icon: User }
      ]
    }
  ];

    const renderStep4 = () => (
        <>
        {/* Main Content */}
        <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <p className="text-gray-700">
                    Descubre el contexto por Industria que se incluirá en el Contenido
                </p>
                </div>
                
                <div className="flex gap-4 mb-8">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                    Editar Contextualización
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <RotateCcw className="w-4 h-4" />
                    Repetir análisis
                </button>
                </div>
            </div>

            {/* Contextualization Section */}
            <div className="space-y-8">
                {contextualizations.map((context, index) => (
                <div key={index} className="border-b border-gray-100 pb-8 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{context.industry}</h3>
                    <p className="text-sm text-gray-600 mb-6">{context.subtitle}</p>
                    
                    {/* Company Size Context */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                    {context.companies.map((company, idx) => (
                        <div key={idx} className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <company.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{company.description}</p>
                        <p className="text-sm font-medium text-blue-600">{company.type}</p>
                        </div>
                    ))}
                    </div>

                    {/* Decision Makers Context */}
                    <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-4">Contextualización por decisores</p>
                    <div className="grid grid-cols-2 gap-4">
                        {context.decisors.map((decisor, idx) => (
                        <div key={idx} className="text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <decisor.icon className="w-6 h-6 text-gray-600" />
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{decisor.description}</p>
                            <p className="text-sm font-medium text-blue-600">{decisor.type}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Contextualización</h3>
            
            <p className="text-sm text-gray-500 mb-6">Ningún servicio seleccionado</p>
            
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

            {renderStep4()}
            </div>
        </div>
        </div>
    );
}