<?php

use Inertia\Testing\AssertableInertia as Assert;

test('analysis results page renders correct inertia component', function () {
    $response = $this->get(route('analysis.results'));

    $response->assertStatus(200)
        ->assertInertia(fn (Assert $page) =>
            $page->component('Analysis/Index')
                ->has('info', fn (Assert $page) => $page
                    ->where('title', 'Resultados')
                    ->where('text', 'Definicion de beneficios accionables')
                    ->has('submenu', 5)
                )
    );
});

test('analysis problems page renders correct inertia component', function () {
    $response = $this->get(route('analysis.problems'));

    $response->assertStatus(200)
        ->assertInertia(fn (Assert $page) =>
            $page->component('Analysis/Index')
                ->has('info', fn (Assert $page) => $page
                    ->where('title', 'Problemas')
                    ->where('text', 'Identificacion de problemas reconocibles desde la perspectiva del cliente')
                    ->has('submenu', 5)
                )
    );
});

test('analysis cases page renders correct inertia component', function () {
    $response = $this->get(route('analysis.cases'));

    $response->assertStatus(200)
        ->assertInertia(fn (Assert $page) =>
            $page->component('Analysis/Index')
                ->has('info', fn (Assert $page) => $page
                    ->where('title', 'Casos de Uso')
                    ->where('text', 'Desarrollo de escenarios practicos donde se aplica el servicio')
                    ->has('submenu', 5)
                )
    );
});