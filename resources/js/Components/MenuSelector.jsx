import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function MenuSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const company = [
        {
            name: 'Ariage Technologies',
            icon: 'https://cdn-icons-png.flaticon.com/512/4207/4207231.png',
        },
        {
            name: 'Ariage Technologies',
            icon: 'https://cdn-icons-png.flaticon.com/512/4207/4207231.png',
        },
        {
            name: 'Ariage Technologies',
            icon: 'https://cdn-icons-png.flaticon.com/512/4207/4207231.png',
        },
        {
            name: 'Ariage Technologies',
            icon: 'https://cdn-icons-png.flaticon.com/512/4207/4207231.png',
        },
        {
            name: 'Ariage Technologies',
            icon: 'https://cdn-icons-png.flaticon.com/512/4207/4207231.png',
        },
    ];

    const [select, setSelect] = useState(0);

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-morado-200 hover:bg-morado-400 flex items-center space-x-2 rounded-lg px-4 py-2 text-white transition-colors"
            >
                <img
                    src={company[select].icon}
                    alt={company[select].name}
                    className="h-5 w-5 rounded-full"
                />
                <span className="text-sm font-medium">
                    {company[select].name}
                </span>
                <ChevronDown className="h-4 w-4" />
            </button>

            {isOpen && (
                <div className="absolute left-0 z-50 mt-2 w-52 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                    {company.map((item, index) => (
                        <button
                            key={index}
                            className="flex w-full gap-2 px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-violet-50"
                            onClick={() => {
                                setSelect(index);
                                setIsOpen(false);
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="h-5 w-5 rounded-full"
                            />
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
