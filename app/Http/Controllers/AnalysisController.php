<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AnalysisController extends Controller
{
    /**
     * Handle the result page.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function result(Request $request) {
        $info = [
            'title' => 'Resultados',
            'text' => 'Definicion de beneficios accionables',
            'submenu' => [
                'Control y Accesibilidad' => [
                    [
                        'title' => 'Acceder al sistema desde cualquier dispositivo',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Acceda remotamente sin barreras',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Gestione múltiples programas',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Transforme su móvil en centro de control',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Gestione su escritorio desde cualquier lugar',
                        'index' => 4,
                    ],
                ],
                'Colaboracion y Trabajo en Equipo' => [
                    [
                        'title' => 'Facilite la colaboracion en tiempo real',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Conecte equipos distrubuidos en cualquier lugar',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Optimice la comunicacion entre dispositivos',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Comparta control con expertos externos',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Democratice el acceso a la informacion',
                        'index' => 4,
                    ],
                ],
                'Eficiencia Operativa' => [
                    [
                        'title' => 'Reduzca tiempos de respuesta en tiempo real',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Automatice secuencias de trabajo',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Agilice la transicion entre turnos',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Optimice recuros tecnologicos en tiempo real',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Reduzca costo de supervision de planta',
                        'index' => 4,
                    ],
                ],
                'Adaptabilidad y Personalizacion' => [
                    [
                        'title' => 'Personalice interfaces segun roles y necesidades',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Escale capacidades sin limitaciones tecnologicas',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Integre fuentes de datos externas',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Adapte la operativa a situaciones cambiantes',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Implemente politicas granulares de acceso',
                        'index' => 4,
                    ],
                ],
                'Innovacion Y Valor Añadido' => [
                    [
                        'title' => 'Modernice sistemas legacy con nuevas tecnologias',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Visualice datos complejos de forma sencilla',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Incorpore capacidades de trabajo remota',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Incorpore capacidades de trabajo remota',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Acelere la transformacion digital',
                        'index' => 4,
                    ],
                ],
            ],
        ];

        return Inertia::render(
            'Analysis/Index',
            compact('info')
        );
    }

    /**
     * Page for problems recognized by the customer.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Inertia\Response
     */
    public function problems(Request $request) {
        $info = [
            'title' => 'Problemas',
            'text' => 'Identificacion de problemas reconocibles desde la perspectiva del cliente',
            'submenu' => [
                'Limitaciones de Acceso y Control' => [
                    [
                        'title' => 'Dependencia exclusiva de estaciones de trabajo fijas',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Desplazamiento innecesario antes de acceder al sistema',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Interfaces complejas que exigen el uso de teclado y ratón',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Acceso limitado a sistemas en tiempo real',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Falta de flexibilidad en dispositivos móviles',
                        'index' => 4,
                    ],
                ],
                'Obstaculos para la Colaboracion' => [
                    [
                        'title' => 'Imposibilidad de trabajo simultaneo',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Barreras geograficas en equipos distribuidos',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Transferencia de conocimiento entre equipos',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Limitaciones para incorporar nuevos miembros',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Informacion aislada en trabajadores externos',
                        'index' => 4,
                    ],
                ],
                'Ineficiencias Operativas' => [
                    [
                        'title' => 'Tiempo de reaccion excesivos antes incidencia',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Repeticion manual de secuencias de trabajo',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Discontinuidad operativa entre equipos',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Infrautilizacion de inversiones tecnologicas',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Exceso de personal en salas de control',
                        'index' => 4,
                    ],
                ],
                'Rigidez y Problemas de Adaptacion' => [
                    [
                        'title' => 'Interfaces genericas inadecuadas para roles especificos',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Limitaciones fisicas para expasion de equipos',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Fragmentacion de herramientas de trabajo',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Dificultad para adaptarse a cambios tecnologicos',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Controles de acceso demasiado complejos',
                        'index' => 4,
                    ],
                ],
                'Barreras para la Innovacion' => [
                    [
                        'title' => 'Sistemas legacy con interfaces complicadas',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Sobrecarga cognitiva por datos complicados',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Incompatibilidad con nuevos dispositivos',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Vulnerabilidad ante situaciones de emergencia',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Transformacion digital parcial o inadecuada',
                        'index' => 4,
                    ],
                ],
            ],
        ];

        return Inertia::render(
            'Analysis/Index',
            compact('info')
        );
    }

    /**
     * Handle the cases page.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function cases(Request $request)  {
        $info = [
            'title' => 'Casos de Uso',
            'text' => 'Desarrollo de escenarios practicos donde se aplica el servicio',
            'submenu' => [
                'Control Operativo Avanzado' => [
                    [
                        'title' => 'Supervision de planta industrial desde smartphone',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Gestion remota de centro de datos',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Control de sistemas audiovisuales remotos',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Operacion de estaciones de energias renovables',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Manejo de infraestructura critica en tiempo real',
                        'index' => 4,
                    ],
                ],
                'Colaboracion Multidisciplinar' => [
                    [
                        'title' => 'Diagnostico medico colaborativo',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Produccion audiovisual con otros profesionales',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Coordinacion de respuesta a emergencias',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Diseño arquitectonico y revision de proyectos',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Informacion aislada en trabajadores externos',
                        'index' => 4,
                    ],
                ],
                'Optamizacion de Recursos' => [
                    [
                        'title' => 'Optamizacion de multiples tiendas de trabajo',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Gestion centralizada de flotillas de vehiculos',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Supervision remota de lineas de produccion',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Control de sistemas integrados de seguridad',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Equipamiento para transmisiones en tiempo real',
                        'index' => 4,
                    ],
                ],
                'Flexibilidad Organizacional' => [
                    [
                        'title' => 'Turnos rotativos con transiciones de turno',
                        'index' => 0,
                    ],
                    [
                        'title' => 'incorporacion agil de consultores externos',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Habilitacion de trabajo hibrido para empleados',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Adaptacion dinamica entes equipos de trabajo',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Personalizacion de interfaces para equipos',
                        'index' => 4,
                    ],
                ],
                'TraNsformacion e Innovacion' => [
                    [
                        'title' => 'Modernizacion de sistemas de control',
                        'index' => 0,
                    ],
                    [
                        'title' => 'Digitalizacion de salas de control',
                        'index' => 1,
                    ],
                    [
                        'title' => 'Continuidad operativa en tiempos de crisis',
                        'index' => 2,
                    ],
                    [
                        'title' => 'Implementacion de nuevas tecnologias',
                        'index' => 3,
                    ],
                    [
                        'title' => 'Integracion de operaciones trasparentes',
                        'index' => 4,
                    ],
                ],
            ],
        ];

        return Inertia::render(
            'Analysis/Index',
            compact('info')
        );
    }
}
