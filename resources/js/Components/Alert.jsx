import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function Alert() {
    const [notify, setNotify] = useState(true);

    return (
        <div className="fixed bottom-4 right-4 flex max-w-md items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl">
            {notify ? (
                <>
                    <MessageCircle className="h-5 w-20 text-blue-700" />
                    <div>
                        <h4 className="font-medium text-gray-800">
                            Aviso Importante
                        </h4>
                        <p className="text-sm text-gray-600">
                            Este formulario es un prototipo diseñado para
                            mostrar el aspecto y las funciones que se
                            implementarán en el futuro. Ten en cuenta que la
                            información que se muestra tras enviarlo es
                            exactamente la que se enviará al modelo de IA
                            (ChatGPT).
                        </p>
                    </div>
                    <X
                        className="h-5 w-20 cursor-pointer text-blue-700"
                        onClick={() => setNotify(false)}
                    />
                </>
            ) : (
                <MessageCircle
                    className="h-5 w-5 cursor-pointer text-blue-700"
                    onClick={() => setNotify(true)}
                />
            )}
        </div>
    );
}
