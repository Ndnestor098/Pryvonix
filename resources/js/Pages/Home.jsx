import Alert from '@/Components/Alert';
import Layout from '@/Layouts/Layout';
import { Head, useForm } from '@inertiajs/react';

export default function Home() {
    const { data, setData, get, errors } = useForm({
        companyName: '',
        service: '',
        website: '',
    });

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
            <Layout />

            {/* <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
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
            </section> */}
            <Alert />
        </>
    );
}
