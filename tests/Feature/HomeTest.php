<?php

use Inertia\Testing\AssertableInertia as Assert;

test('home page renders correct inertia component', function () {
    $response = $this->get(route('home.index'));

    $response->assertStatus(200)
        ->assertInertia(fn (Assert $page) =>
            $page->component('Home')
                ->missing('prompt')
        );
});

