<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

Route::get('/before-starting-steps', function (Request $request)  {
    return Inertia::render('BeforeStartingSteps');
})->name('before-starting-steps');

Route::get('/step/1', function ()  {
    return Inertia::render('Steps/One');
})->name('step-one');

Route::get('/step/2', function ()  {
    return Inertia::render('Steps/Two');
})->name('step-two');

Route::get('/step/3', function () {
    return Inertia::render('Steps/Three');
})->name('step-three');

Route::get('/step/4', function ()  {
    $company = Session::get('wizard.company');
    $web = Session::get('wizard.web');
    $clients = Session::get('wizard.clients');
    $successes = Session::get('wizard.successes');

    return [
        'company' => $company,
        'web' => $web,
        'clients' => $clients,
        'successes' => $successes
    ];
})->name('step-four');

Route::post('/temp-store', function (Request $request) {
    if ($request->has('company')) {
        session()->put('wizard.company', $request->company);
    }

    if ($request->has('web')) {
        session()->put('wizard.web', $request->web);
    }

    if ($request->has('clients')) {
        session()->put('wizard.clients', $request->clients);
    }

    if ($request->has('successes')) {
        session()->put('wizard.successes', $request->successes);
    }

    return response()->json(['ok' => true]);
})->name('store-step-data');




Route::get('/step/5', function ()  {
    return Inertia::render('Steps/Five');
})->name('step-five');