import Alert from '@/Components/Alert';
import { Head, Link } from '@inertiajs/react';
import { BookOpen, House } from 'lucide-react';

export default function Result({ intro, objectives }) {
    return (
        <>
            <Head title="Result" />

            <Link href={route('home')} className="fixed left-4 top-4 z-10">
                <House className="h-8 w-8 text-gray-600 hover:text-gray-800" />
            </Link>

            <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
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

                                                    {item.sublist.length >
                                                        0 && (
                                                        <ul className="list-inside list-disc space-y-2 text-gray-600">
                                                            {item.sublist.map(
                                                                (
                                                                    sublit,
                                                                    index,
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {
                                                                            sublit.text
                                                                        }
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    )}
                                                </p>
                                            </>
                                        );
                                    })}
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <Alert />
        </>
    );
}
