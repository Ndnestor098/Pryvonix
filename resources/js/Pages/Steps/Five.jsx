import ProgressSteps from '@/Components/ProgressSteps';
import { Head, Link } from '@inertiajs/react';
import { Building, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Five() {
    const [selectedIndustry, setSelectedIndustry] = useState('Industrias');

    const [selectedCompanySize, setSelectedCompanySize] =
        useState('Tamaño Empresa');

    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: false },
        { id: 2, name: 'Clientes Potenciales', active: false },
        { id: 3, name: 'Éxitos del Servicio', active: false },
        { id: 4, name: 'Contextualización Industrial', active: false },
        { id: 5, name: 'Creación de Contenido', active: true },
    ];

    const data = [
        {
            id: 1,
            industry: 'Arquitectura',
            companySize: 'Pequeña Empresa',
            content: '0 de 5',
            contentCreated: 'Ninguno',
            icon: Building,
        },
        {
            id: 2,
            industry: 'Arquitectura',
            companySize: 'Mediana Empresa',
            content: '0 de 5',
            contentCreated: 'Ninguno',
            icon: Building,
        },
        {
            id: 3,
            industry: 'Arquitectura',
            companySize: 'Grande Empresa',
            content: '0 de 5',
            contentCreated: 'Ninguno',
            icon: Building,
        },
        {
            id: 5,
            industry: 'Repsol',
            companySize: 'Pequeña Empresa',
            content: '1 mil+',
            contentDetail: 'de 23 mil+',
            contentCreated: 'Ninguno',
            icon: Building,
        },
        {
            id: 6,
            industry: 'Repsol',
            companySize: 'Mediana Empresa',
            content: '1 mil+',
            contentDetail: 'de 23 mil+',
            contentCreated: 'Ninguno',
            icon: Building,
        },
        {
            id: 7,
            industry: 'Repsol',
            companySize: 'Grande Empresa',
            content: '1 mil+',
            contentDetail: 'de 23 mil+',
            contentCreated: 'Ninguno',
            icon: Building,
        },
    ];

    const [contentData, setContentData] = useState(data);

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Paso 5" />

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
                                Paso 5
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
                                <div className="mb-6 rounded-lg bg-gray-100 p-4 text-center">
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Creación de Contenido
                                    </h2>
                                </div>

                                {/* Filter Dropdowns */}
                                <div className="mb-8 flex gap-4">
                                    <div className="relative">
                                        <select
                                            value={selectedIndustry}
                                            onChange={(e) => {
                                                if (
                                                    e.target.value === 'Todas'
                                                ) {
                                                    setSelectedIndustry(
                                                        e.target.value,
                                                    );
                                                    setContentData(data);
                                                    return;
                                                }
                                                setSelectedIndustry(
                                                    e.target.value,
                                                );
                                                setContentData(
                                                    data.filter(
                                                        (item) =>
                                                            item.industry ===
                                                            e.target.value,
                                                    ),
                                                );
                                            }}
                                            className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="Todas">Todas</option>
                                            <option value="Industrias">
                                                Industrias
                                            </option>
                                            <option value="Arquitectura">
                                                Arquitectura
                                            </option>
                                            <option value="Repsol">
                                                Repsol
                                            </option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                    </div>

                                    <div className="relative">
                                        <select
                                            value={selectedCompanySize}
                                            onChange={(e) => {
                                                if (
                                                    e.target.value === 'Todas'
                                                ) {
                                                    setSelectedCompanySize(
                                                        e.target.value,
                                                    );
                                                    setContentData(data);
                                                    return;
                                                }
                                                setSelectedCompanySize(
                                                    e.target.value,
                                                );
                                                setContentData(
                                                    data.filter(
                                                        (item) =>
                                                            item.companySize ===
                                                            e.target.value,
                                                    ),
                                                );
                                            }}
                                            className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="Todas">
                                                Todas las Empresa
                                            </option>
                                            <option value="Pequeña Empresa">
                                                Pequeña Empresa
                                            </option>
                                            <option value="Mediana Empresa">
                                                Mediana Empresa
                                            </option>
                                            <option value="Grande Empresa">
                                                Grande Empresa
                                            </option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Table */}
                            <div className="overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="flex items-center gap-2 px-4 py-3 text-left font-medium text-gray-900">
                                                Empresa
                                                <ChevronUp className="h-4 w-4 text-gray-400" />
                                            </th>
                                            <th className="px-4 py-3 text-left font-medium text-gray-900">
                                                Contenido
                                            </th>
                                            <th className="px-4 py-3 text-left font-medium text-gray-900">
                                                Contenido Creado
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contentData.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="border-b border-gray-100 hover:bg-gray-50"
                                            >
                                                <td className="px-4 py-4">
                                                    <Link
                                                        href={route(
                                                            'content-generator.view',
                                                            {
                                                                name: item.industry,
                                                            },
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
                                                                <item.icon className="h-4 w-4 text-gray-600" />
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-blue-600">
                                                                    {
                                                                        item.industry
                                                                    }
                                                                </p>
                                                                <p className="text-sm text-gray-500">
                                                                    {
                                                                        item.companySize
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>

                                                <td className="px-4 py-4">
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {item.content}
                                                        </p>
                                                        {item.contentDetail && (
                                                            <p className="text-sm text-gray-500">
                                                                {
                                                                    item.contentDetail
                                                                }
                                                            </p>
                                                        )}
                                                    </div>
                                                </td>

                                                <td className="px-4 py-4">
                                                    <p className="text-gray-600">
                                                        {item.contentCreated}
                                                    </p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 font-semibold text-gray-900">
                            Contenido
                        </h3>

                        <p className="mb-6 text-sm text-gray-500">
                            Ningún servicio seleccionado
                        </p>

                        <div className="flex gap-2">
                            <Link
                                href={route('content-generator.step-four')}
                                className="block w-full flex-1 rounded-lg border border-gray-300 px-4 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Paso Anterior
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
