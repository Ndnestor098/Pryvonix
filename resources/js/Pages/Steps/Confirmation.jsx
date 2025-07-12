import ProgressSteps from '@/Components/ProgressSteps';
import { Head, Link, router } from '@inertiajs/react';
import { Building, Edit, RotateCcw, User } from 'lucide-react';
import { useState } from 'react';

const handleClick = async (e, selectedContext) => {
    e.preventDefault();

    if (!selectedContext.industry) return;

    try {
        const response = await axios.post(
            route('content-generator.store-step-data'),
            {
                context: selectedContext,
            },
            {
                withCredentials: true,
            },
        );

        if (response.status === 200) {
            router.visit(route('content-generator.step-five'));
        }
    } catch (error) {
        console.error('Error al guardar los datos temporales:', error);
    }
};

export default function Four() {
    const [selectedContext, setSelectedContext] = useState({
        industry: '',
        subtitle: '',
        companies: [],
        decisors: [],
    });

    const steps = [
        { id: 1, name: 'Seleccionar Servicio', active: false },
        { id: 2, name: 'Clientes Potenciales', active: false },
        { id: 3, name: 'Éxitos del Servicio', active: false },
        { id: 4, name: 'Contextualización Industrial', active: true },
        { id: 5, name: 'Creación de Contenido', active: false },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Paso 4" />

            {/* Header with Progress Steps */}
            <ProgressSteps steps={steps} />

            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex gap-8">
                    {/* Main Content */}
                    
                </div>
            </div>
        </div>
    );
}
