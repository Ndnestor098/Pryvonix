import { ArrowBigUp } from 'lucide-react';

export default function Up() {
    const handleUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="fixed bottom-4 right-4 flex max-w-md cursor-pointer items-center gap-3 rounded-lg border border-gray-100 bg-white p-1 shadow-lg transition-shadow hover:shadow-xl"
            onClick={handleUp}
        >
            <ArrowBigUp
                className="h-8 w-8 text-morado-200"
                onClick={() => setNotify(true)}
            />
        </div>
    );
}
