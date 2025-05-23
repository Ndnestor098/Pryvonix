import { Head, useForm } from '@inertiajs/react';
import { ArrowBigDown, BookOpen, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function Home({ intro, objectives }) {
    const { data, setData, get, errors } = useForm({
        companyName: '',
        service: '',
        website: '',
    });

    const [notify, setNotify] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes agregar la lógica para enviar los datos
        get(route('ai'));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <Head title="Home" />
            <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
                <div className="x-auto w-full max-w-96 rounded-xl bg-white p-8 shadow-lg">
                    <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                        Registro de Empresa
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="companyName"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Nombre de Empresa
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={data.companyName}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="Ingrese el nombre de su empresa"
                                required
                            />
                            {errors.companyName && (
                                <span className="block w-full text-center text-xs font-semibold text-red-700">
                                    {errors.companyName}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="service"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Servicio de Empresa
                            </label>
                            <input
                                type="text"
                                id="service"
                                name="service"
                                value={data.service}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="Describa el servicio principal"
                                required
                            />
                            {errors.service && (
                                <span className="block w-full text-center text-xs font-semibold text-red-700">
                                    {errors.service}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="website"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Link a la Web
                            </label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                value={data.website}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="https://www.ejemplo.com"
                                required
                            />
                            {errors.website && (
                                <span className="block w-full text-center text-xs font-semibold text-red-700">
                                    {errors.website}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
                        >
                            Registrar Empresa
                        </button>
                    </form>
                </div>
                {intro && objectives && (
                    <div className="absolute bottom-2 mx-auto">
                        <a href="#seccion">
                            <ArrowBigDown className="h-10 w-10 animate-float text-blue-700" />
                        </a>
                    </div>
                )}
            </section>
            <section id="seccion">
                {intro && objectives && text(intro, objectives)}
            </section>

            {notify ? (
                <div className="fixed bottom-4 right-4 flex max-w-md items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl">
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
                </div>
            ) : (
                <div className="fixed bottom-4 right-4 flex max-w-md items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl">
                    <MessageCircle
                        className="h-5 w-5 cursor-pointer text-blue-700"
                        onClick={() => setNotify(true)}
                    />
                </div>
            )}
        </>
    );
}

function text(intro, objectives) {
    return (
        <div className="z-40 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
            <article className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="p-8">
                    <div className="mb-8 flex items-center gap-3">
                        <BookOpen className="h-8 w-8 text-blue-500" />
                        <h1 className="text-3xl font-bold text-gray-800">
                            Respuesta de Prueba enviada por la IA
                        </h1>
                    </div>

                    <div className="prose prose-lg prose-indigo max-w-none">
                        {/* <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                            {intro}
                        </h2> */}
                        <p className="mb-6 leading-relaxed text-gray-600">
                            {intro}
                        </p>

                        {objectives &&
                            objectives.map((item, index) => {
                                return (
                                    <>
                                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                                            {index + 1}: {item.title}
                                        </h3>
                                        <p className="mb-6 leading-relaxed text-gray-600">
                                            {item.text}

                                            {item.sublist.length > 0 && (
                                                <ul className="list-inside list-disc space-y-2 text-gray-600">
                                                    {item.sublist.map(
                                                        (sublit, index) => (
                                                            <li key={index}>
                                                                {sublit.text}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            )}
                                        </p>
                                    </>
                                );
                            })}

                        {/* <div className="mb-6 border-l-4 border-indigo-600 bg-indigo-50 p-4">
                            <p className="font-medium text-indigo-900">
                                Nota importante: La elección de las herramientas
                                adecuadas es crucial para el éxito de tu
                                proyecto. Considera factores como el
                                rendimiento, la mantenibilidad y la
                                escalabilidad.
                            </p>
                        </div> */}
                        {/* <h4 className="mb-3 text-xl font-semibold text-gray-800">
                            Paso 3 — Selección de 25 beneficios
                        </h4>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            <strong>Instrucciones a la IA</strong>
                            Actúa como experto en transformar un servicio B2B en
                            beneficios comerciales útiles, claros y con peso
                            propio.
                            <br />
                            Vas a redactar una lista de 25 beneficios que la
                            empresa líder puede prometer a sus clientes con este
                            servicio. Cada beneficio debe representar una
                            ventaja concreta y real que sea fácil de entender
                            por un cliente potencial.
                            <br />
                            Antes de mostrar la lista, redacta una breve
                            justificación que explique por qué estos beneficios
                            tienen sentido comercial. Estructura esa
                            justificación en tres bloques:
                            <br />
                            <strong>
                                Estructura esa justificación en tres bloques:
                            </strong>
                            <br />
                            <ul className="list-inside list-disc space-y-2 text-gray-600">
                                <li>
                                    <strong>
                                        Lo que [nombre de la empresa que
                                        contrata el servicio] sabe hacer
                                    </strong>
                                    <br />
                                    Explica cómo los beneficios se apoyan en
                                    funciones reales del servicio, no en
                                    promesas ni aspiraciones.
                                </li>
                                <li>
                                    <strong>
                                        Lo que los clientes de [nombre de la
                                        empresa que contrata el servicio] están
                                        buscando ahora
                                    </strong>
                                    <br />
                                    Relaciona los beneficios con necesidades
                                    actuales del mercado.
                                </li>
                                <li>
                                    <strong>
                                        Lo que no ofrecen otras soluciones
                                    </strong>
                                    <br />
                                    Señala en qué aspectos estos beneficios
                                    marcan una diferencia respecto a otras
                                    alternativas.
                                </li>
                            </ul>
                            Cada bloque debe ser breve, directo y aportar una
                            razón concreta y creíble.
                        </p> */}

                        {/* <div className="mb-6 rounded-lg bg-gray-50 p-6">
                            <h4 className="mb-2 text-lg font-semibold text-gray-800">
                                Paso 3 — Selección de 25 beneficios
                            </h4>
                            <p className="mb-6 leading-relaxed text-gray-600">
                                <strong>Instrucciones a la IA</strong>
                                Actúa como experto en transformar un servicio
                                B2B en beneficios comerciales útiles, claros y
                                con peso propio.
                                <br />
                                Vas a redactar una lista de 25 beneficios que la
                                empresa líder puede prometer a sus clientes con
                                este servicio. Cada beneficio debe representar
                                una ventaja concreta y real que sea fácil de
                                entender por un cliente potencial.
                                <br />
                                Antes de mostrar la lista, redacta una breve
                                justificación que explique por qué estos
                                beneficios tienen sentido comercial. Estructura
                                esa justificación en tres bloques:
                                <br />
                                <strong>
                                    Estructura esa justificación en tres
                                    bloques:
                                </strong>
                                <br />
                                <ul className="list-inside list-disc space-y-2 text-gray-600">
                                    <li>
                                        <strong>
                                            Lo que [nombre de la empresa que
                                            contrata el servicio] sabe hacer
                                        </strong>
                                        <br />
                                        Explica cómo los beneficios se apoyan en
                                        funciones reales del servicio, no en
                                        promesas ni aspiraciones.
                                    </li>
                                    <li>
                                        <strong>
                                            Lo que los clientes de [nombre de la
                                            empresa que contrata el servicio]
                                            están buscando ahora
                                        </strong>
                                        <br />
                                        Relaciona los beneficios con necesidades
                                        actuales del mercado.
                                    </li>
                                    <li>
                                        <strong>
                                            Lo que no ofrecen otras soluciones
                                        </strong>
                                        <br />
                                        Señala en qué aspectos estos beneficios
                                        marcan una diferencia respecto a otras
                                        alternativas.
                                    </li>
                                </ul>
                                Cada bloque debe ser breve, directo y aportar
                                una razón concreta y creíble.
                            </p>
                        </div> */}
                    </div>
                </div>
            </article>
        </div>
    );
}
