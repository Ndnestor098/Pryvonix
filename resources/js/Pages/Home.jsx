import Alert from '@/Components/Alert';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Layout>
                <p>Seccion de Volcado de contenido</p>
            </Layout>

            <Alert />
        </>
    );
}
