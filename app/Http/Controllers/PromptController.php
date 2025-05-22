<?php

namespace App\Http\Controllers;

use App\Services\OpenRouterService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use OpenAI;

class PromptController extends Controller
{
    protected $introduction = <<<TEXT
        Paso 1: Introducción a la IA

        Tu objetivo:
        Transformar la información estratégica de una empresa B2B en contenido comercial útil, claro y escalable. Trabajarás con una empresa líder (quien contrata el sistema) que quiere mostrar su experiencia a través de casos de éxito construidos sobre los problemas, beneficios y contextos reales de sus clientes finales.

        El sistema se divide en subpasos. En cada uno se generará contenido estructurado que luego se asociará a perfiles de cliente para construir mensajes personalizados.

        Requisitos:
        - Mantén siempre un enfoque profesional, comercial y orientado a impacto.
        - No utilices lenguaje hinchado, promocional o autorreferencial.

        ---

        Paso 2: Enfoque desde la web del servicio

        Objetivo:
        Establecer una visión clara y estructurada sobre cómo comunica la empresa líder su servicio en su página web.

        La empresa líder es:
        Ariage Technologies  
        https://ariage.tech/soluciones/

        Nos centraremos únicamente en el servicio:  
        **Mondrian Interface for Remote Operators**

        Analiza solo esa sección de la web para identificar:
        1. Tono y enfoque comercial principal (por ejemplo: eficiencia, seguridad, innovación...)
        2. Beneficios repetidos o destacados
        3. Palabras clave y temas que estructuran la propuesta de valor

        Este análisis servirá para orientar la selección posterior de resultados y asegurar que lo que se extrae esté alineado con el posicionamiento actual del servicio.

        ---

        🔢 **Nota importante sobre formato de listas**:  
        **Siempre que hagas listas, usa números secuenciales (1., 2., 3.) y no símbolos como '*', '-', '•', etc.**

        Si hay sublistas, sigue el formato jerárquico:  
        - Ejemplo correcto:
            3.1. Primer mensaje de ejemplo  
            3.2. Segundo mensaje de ejemplo  
            3.3. Tercer mensaje de ejemplo

        Nunca uses guiones, asteriscos u otros símbolos para listas.

        ---
    TEXT;


    protected $responseAI = <<<TEXT
        Análisis del enfoque de la web de Ariage Technologies para el servicio
        Mondrian Interface for Remote Operators: 
            1. Tono y enfoque comercial principal: 
                La página web de Ariage Technologies para el servicio Mondrian Interface
                for Remote Operators presenta un enfoque comercial altamente orientado
                a la realidad de los clientes, enfatizando la necesidad de optimizar la
                administración remota de sus operaciones a través del empoderamiento de
                sus trabajadores. El tono se caracteriza por ser profesional, confiable
                y enfocado en mejorar la eficiencia de sus servicios. La palabra clave
                que estructura la propuesta de valor es la automatización de procesos. 
            2. Beneficios repetidos o destacados: 
                Entre los beneficios repetidos o destacados, se encuentran la posibilidad
                de optimización de recursos, facilidad de integración con servicios ya
                existentes, reducción del riesgo de errores humanos y el incremento de la
                productividad de los operadores. 
            3. Palabras clave y temas que estructuran la propuesta de valor: 
                Algunos de los temas y palabras clave que estructuran la propuesta
                de valor del servicio Mondrian incluyen automatización, integración,
                seguridad, eficiencia, performance, configuración, API, Cloud (servicios 
                en la nube), Software (sistemas de software), Remote (a distancia) y
                Operators (operadores). Estos temas ayudarán a orientar la selección de los
                resultados y asegurar que su contenido esté alineado con el posicionamiento
                actual del servicio.
    TEXT;

    protected $responseAI_2 = <<<TEXT
        Análisis de la web de Ariage Technologies, sección Mondrian Interface
        for Remote Operators: 
        1. Tono y enfoque comercial principal: 
            Un enfoque centrado en la inovación, la colaboración entre fallas y cambio rápido,
            la comunicación clarísima y la colaboración remota efectiva. 
        2. Beneficios repetidos o destacados: 
            Mejorando la comunicación en línea, optimizando la colaboración
            remota, aumentando la eficiencia y la productividad, brindando una
            interfaz una intuitiva y fácil de usar, mejorando la comunicación
            y la gestión de errores en real-time, garantizando la seguridad y
            la privacidad de la información. 
        3. Palabras clave y temas que estructuran la propuesta de valor:
            Interfaz de usuario moderna,
            herramientas inteligentes de chat, funcionalidad para la colaboración
            remota, seguridad y privacidad, comunicación en línea eficiente,
            funcionalidad para la gestión de errores, productividad y eficiencia.
            Basándonos en esto, el contenido comercial de Ariage Technologies
            para su servicio Mondrian Interface for Remote Operators en sus
            comunicaciones debe estar enfocado en la capacidad del sistema para
            mejorar la colaboración remota, la comunicación en línea eficiente,
            y aumentar la productividad y la eficiencia de sus clientes finales.
            Los mensajes deben estar basados en la presentación de resultados
            reales obtenidos y un enfoque positivo, con un lenguaje claro y las
            palabras clave relacionadas con el tema mencionado. Algunos ejemplos
            de mensajes podría ser: 
                3.1. "El Mondrian Interface for Remote Operators de Ariage
                Technologies le permitirá mejorar la comunicación en línea, optimizar
                la colaboración remota y aumentar la productividad y la eficiencia de su negocio." 
                3.2. "El Mondrian Interface for Remote Operators: la solución perfecta para garantizar
                una colaboración remota efectiva y una comunicación en línea eficiente." 
                3.3. "Con Ariage Technologies, su negocio podría alcanzar su potencial completo
                con nuestra herramienta de colaboración remota opresiva y la comunicación en
                línea eficiente." 
                3.4. "Reduca la brecha conductual y la frustración que puede ocurrir con la colaboración
                remota con nuestra interfaz de usuario intuitiva y herramientas inteligentes de chat." 
                3.5. "La seguridad y la privacidad de la información son las prioridades en todas las
                actividades y con el Mondrian Interface for Remote Operators, las se mantienen."
    TEXT;

    public function test(Request $request, OpenRouterService $openRouter) 
    {
        // $response = $openRouter->sendMessage(
        //     $this->introduction
        // );

        // Limpia la indentación innecesaria
        $text = trim($this->responseAI_2);

        // Extraer la introducción (todo lo que está antes de "1.")
        preg_match('/^(.*?)\s*1\.\s+/s', $text, $introMatch);
        $intro = trim($introMatch[1] ?? '');

        // 2. Extraer secciones principales (1., 2., 3.) sin romper por sublistas (3.1., 3.2.)
        preg_match_all('/^\s*(\d\.)\s+(.*?)(?=^\s*\d\.\s+|\z)/ms', $text, $matches, PREG_SET_ORDER);

        $objectives = [];

        foreach ($matches as $match) {
            $raw = trim($match[2]);

            // Separar título y cuerpo si contiene ":"
            if (strpos($raw, ':') !== false) {
                [$title, $body] = explode(':', $raw, 2);
            } else {
                $title = "Sección " . trim($match[1]);
                $body = $raw;
            }

            $objectives[] = [
                'title' => trim($title),
                'text' => trim($body),
            ];
        }

        return to_route([
            'intro' => $intro,
            'objectives' => $objectives
        ]);
    }
}
