import TopicCard from '@/Components/TopicCard';
import {
    ChartNoAxesColumn,
    ChevronDown,
    ChevronRight,
    Database,
} from 'lucide-react';

/**
 * Componente que renderiza una tarjeta de tema, con un sidebar para navegar entre
 * los diferentes subtemas y un contenido principal que muestra la información
 * asociada a cada subtema.
 *
 * @param {{ title: string, text: string, submenu: { [groupName: string]: { title: string, description: string }[] } }} info - Información del tema.
 *
 * @returns Un JSX element que representa la tarjeta del tema.
 */
export default function TopicBoard({ info }) {
    return (
        <div>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-gray-600">
                <span>Arsenal de Mensajes</span>
                <ChevronRight className="h-4 w-4" />
                <span>Selección de Resultados</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    {info.title}:{' '}
                    <span className="text-gray-500">
                        Mondrian Interface for Remote Operators
                    </span>
                </h1>

                {/* Controls */}
                <div className="mt-1 flex gap-4">
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-50">
                            <ChartNoAxesColumn className="h-4 w-4 text-morado-200" />
                            <span>25</span>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-50">
                            <Database className="h-4 w-4 text-blue-600" />
                            <span>Fuentes</span>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-50">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/939/939640.png"
                                alt=""
                                className="h-4 w-4"
                            />
                            <span>🇪🇸</span>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">IDIOMA</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Definition Card */}
            <div className="mb-8 max-w-[1230px] rounded-lg border border-blue-300 bg-sky-100 p-4">
                <div className="flex items-center gap-3">
                    <div className="rounded-lg">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/17895/17895310.png"
                            alt=""
                            className="h-10 w-10"
                        />
                    </div>
                    <span>{info.text}</span>
                </div>
            </div>

            {/* Results Section */}
            <div className="mb-4 text-sm font-medium text-gray-600">
                {info.title} agrupados por categorías
            </div>

            {Object.entries(info.submenu).map(([groupName, items], idx) => (
                <TopicCard
                    key={idx}
                    idx={idx}
                    color={info.title}
                    menu={items}
                    title={groupName}
                />
            ))}
        </div>
    );
}
