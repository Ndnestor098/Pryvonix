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
        Transformar la información estratégica de una empresa B2B en contenido comercial útil,
        claro y escalable. Trabajarás con una empresa líder (quien contrata el sistema) que quiere
        mostrar su experiencia a través de casos de éxito construidos sobre los problemas, beneficios
        y contextos reales de sus clientes finales.

        El sistema se divide en subpasos. En cada uno se generará contenido estructurado que
        luego se asociará a perfiles de cliente para construir mensajes personalizados.

        Requisitos:
        - Mantén siempre un enfoque profesional, comercial y orientado a impacto.
        - No utilices lenguaje hinchado, promocional o autorreferencial.

        ---

        Paso 2: Enfoque desde la web del servicio

        Objetivo:
        Establecer una visión clara y estructurada sobre cómo comunica la empresa líder su servicio en su página web.

        La empresa líder es:
        _empresa_  
        _website_

        Nos centraremos únicamente en el servicio:  
        **_servicio_**

        Analiza solo esa sección de la web para identificar:
        1. Tono y enfoque comercial principal (por ejemplo: eficiencia, seguridad, innovación...)
        2. Beneficios repetidos o destacados
        3. Palabras clave y temas que estructuran la propuesta de valor

        Este análisis servirá para orientar la selección posterior de resultados y asegurar que lo que se extrae esté alineado con el posicionamiento actual del servicio.

        ---

        📌 **Reglas estrictas de formato (obligatorias):**
        - Todas las listas deben estar numeradas: 1., 2., 3. (no usar '*', '-', '•', etc.).
        - Para sublistas, utiliza siempre el formato jerárquico: 3.1., 3.2., 3.3.
        - No se permiten guiones ni asteriscos al inicio de ninguna línea.
        - El contenido debe seguir estrictamente este formato.
        - No usar en los inicio de los titulos o subtitulos * o #
        ---
    TEXT;

    public function test(Request $request, OpenRouterService $openRouter) 
    {
        $request->validate([
            'companyName' => 'required|string',
            'website' => 'required|url',
            'service' => 'required|string',
        ]);

        $introduction = str_replace(
            [
                '_empresa_', 
                '_website_', 
                '_servicio_'
            ],
            [
                $request->input("companyName"),
                $request->input('website'),
                $request->input("service")
            ],
            $this->introduction
        );

        $yourApiKey = getenv('AI_API_KEY');
        $client = OpenAI::client($yourApiKey);

        $result = $client->chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                [
                    'role' => 'user', 
                    'content' => $introduction
                ],
            ],
        ]);

        // return $result->choices[0]->message->content;

        // Limpia la indentación innecesaria
        $text = trim($result->choices[0]->message->content);

        // // Extraer la introducción (todo lo que está antes de "1.")
        preg_match('/^(.*?)\s*1\.\s+/s', $text, $introMatch);
        $intro = trim($introMatch[1] ?? '');

        // // $intro = preg_replace('/Paso\s*2:.*?Objetivo:\s*/is', '', $intro);

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

            $sublist = [];

            // Detectar sublistas numéricas o con guiones/asteriscos
            // Ejemplo: 3.1. Texto o - Texto o * Texto
            // Primero extraemos todas las sublistas posibles:
            preg_match_all('/^\s*(\d+\.\d+\.?|[-*])\s+(.*)$/m', $body, $subMatches, PREG_SET_ORDER);

            if ($subMatches) {
                foreach ($subMatches as $subMatch) {
                    $number = $subMatch[1];
                    $text = $subMatch[2];

                    // Solo agregamos si es formato numérico tipo 3.1. o 3.2., o si quieres también guiones, agregarlos con algún flag
                    if (preg_match('/^\d+\.\d+\.?$/', $number)) {
                        $sublist[] = [
                            'number' => $number,
                            'text' => trim($text),
                        ];
                    }
                    // Si quieres manejar guiones/asteriscos como sublistas, aquí agregas también
                    else if (in_array($number, ['-', '*'])) {
                        $sublist[] = [
                            'number' => $number,
                            'text' => trim($text),
                        ];
                    }
                }

                // Remover esas sublistas del body principal (todas las líneas con sublistas)
                $body = preg_replace('/^\s*(\d+\.\d+\.?|[-*])\s+.*$/m', '', $body);
            }

            $objectives[] = [
                'title' => trim($title),
                'text' => trim($body),
                'sublist' => $sublist,
            ];
        }

        // return [
        //     'data' => $result->choices[0]->message->content,
        //     'intro' => $intro,
        //     'objectives' => $objectives,
        // ];

        return Inertia::render('Result', [
            'intro' => $intro,
            'objectives' => $objectives,
        ]);
    }
}
