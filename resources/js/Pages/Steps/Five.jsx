import React, { useState } from 'react';
import { Edit, RotateCcw, ExternalLink, Users, Building, Plus, Check, TrendingUp, User, ChevronDown, ChevronUp } from 'lucide-react';

export default function Five() {
    const [selectedIndustry, setSelectedIndustry] = useState('Industrias');
    const [selectedCompanySize, setSelectedCompanySize] =
        useState('Tamaño Empresa');

    const steps = [
        { id: 1, name: "Seleccionar Servicio", active: false},
        { id: 2, name: "Clientes Potenciales", active: false },
        { id: 3, name: "Éxitos del Servicio", active: false },
        { id: 4, name: "Contextualización Industrial", active: false },
        { id: 5, name: "Creación de Contenido", active: true }
    ];

    const data = [
        {
            id: 1,
            industry: "Arquitectura",
            companySize: "Pequeña Empresa",
            content: "0 de 5",
            contentCreated: "Ninguno",
            icon: Building
        },
        {
        id: 2,
        industry: "Arquitectura", 
        companySize: "Mediana Empresa",
        content: "0 de 5",
        contentCreated: "Ninguno",
        icon: Building
        },
        {
        id: 3,
        industry: "Arquitectura",
        companySize: "Grande Empresa",
        content: "0 de 5", 
        contentCreated: "Ninguno",
        icon: Building
        },
        {
        id: 5,
        industry: "Repsol",
        companySize: "Pequeña Empresa", 
        content: "1 mil+",
        contentDetail: "de 23 mil+",
        contentCreated: "Ninguno",
        icon: Building
        },
        {
        id: 6,
        industry: "Repsol",
        companySize: "Mediana Empresa",
        content: "1 mil+",
        contentDetail: "de 23 mil+", 
        contentCreated: "Ninguno",
        icon: Building
        },
        {
        id: 7,
        industry: "Repsol",
        companySize: "Grande Empresa",
        content: "1 mil+",
        contentDetail: "de 23 mil+",
        contentCreated: "Ninguno", 
        icon: Building
        }
    ];

    const [contentData, setContentData] = useState(data);

    const render = () => (
        <>
        {/* Main Content */}
        <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {/* Header */}
                <div className="mb-8">
                    <div className="bg-gray-100 rounded-lg p-4 mb-6 text-center">
                        <h2 className="text-lg font-medium text-gray-900">Creación de Contenido</h2>
                    </div>
                
                    {/* Filter Dropdowns */}
                    <div className="flex gap-4 mb-8">
                        <div className="relative">
                            <select 
                                value={selectedIndustry}
                                onChange={(e) => {
                                    if (e.target.value === "Todas") {
                                        setSelectedIndustry(e.target.value);
                                        setContentData(data);
                                        return;
                                    }
                                    setSelectedIndustry(e.target.value);
                                    setContentData(data.filter(item => item.industry === e.target.value))
                                }}
                                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                            <option value="Todas">Todas</option>
                            <option value="Industrias">Industrias</option>
                            <option value="Arquitectura">Arquitectura</option>
                            <option value="Repsol">Repsol</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    
                        <div className="relative">
                            <select 
                            value={selectedCompanySize}
                            onChange={(e) => {
                                if (e.target.value === "Todas") {
                                    setSelectedCompanySize(e.target.value);
                                    setContentData(data);
                                    return;
                                }
                                setSelectedCompanySize(e.target.value)
                                setContentData(data.filter(item => item.companySize === e.target.value))
                            }}
                            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                            <option value="Todas">Todas las Empresa</option>
                            <option value="Pequeña Empresa">Pequeña Empresa</option>
                            <option value="Mediana Empresa">Mediana Empresa</option>
                            <option value="Grande Empresa">Grande Empresa</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

            {/* Content Table */}
            <div className="overflow-hidden">
                <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900 flex items-center gap-2">
                        Empresa
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Contenido</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Contenido Creado</th>
                    </tr>
                </thead>
                <tbody>
                    {contentData.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                            <p className="font-medium text-blue-600">{item.industry}</p>
                            <p className="text-sm text-gray-500">{item.companySize}</p>
                            </div>
                        </div>
                        </td>
                        <td className="py-4 px-4">
                        <div>
                            <p className="font-medium text-gray-900">{item.content}</p>
                            {item.contentDetail && (
                            <p className="text-sm text-gray-500">{item.contentDetail}</p>
                            )}
                        </div>
                        </td>
                        <td className="py-4 px-4">
                        <p className="text-gray-600">{item.contentCreated}</p>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Contenido</h3>
            
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
                <h3 className="font-semibold text-gray-900">Paso 5</h3>
                <p className="text-sm text-gray-600 text-center">
                    Éxitos del Servicio
                </p>
                </div>
            </div>

            {render()}
            </div>
        </div>
        </div>
    );
}
