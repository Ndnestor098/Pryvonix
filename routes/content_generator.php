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
    return Inertia::render('Steps/Four');
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

    if ($request->has('context')) {
        session()->put('wizard.context', $request->context);
    }

    return response()->json(['ok' => true]);
})->name('store-step-data');

Route::get('/confirmation', function (Request $request) {
    switch ($request->step) {
        case '1':
            return Inertia::render('Steps/Confirmation', [
                'company' => session()->get('wizard.company'),
                'web' => session()->get('wizard.web'),
                'step' => '1'
            ]);
            break;
        case '2':
            return Inertia::render('Steps/Confirmation', [
                'company' => session()->get('wizard.company'),
                'web' => session()->get('wizard.web'),
                'clients' => session()->get('wizard.clients'),
                'step' => '2'
            ]);
            break;
        case '3':
            return Inertia::render('Steps/Confirmation', [
                'company' => session()->get('wizard.company'),
                'web' => session()->get('wizard.web'),
                'clients' => session()->get('wizard.clients'),
                'successes' => session()->get('wizard.successes'),
                'step' => '3'
            ]);
            break;
        case '4':
            return Inertia::render('Steps/Confirmation', [
                'company' => session()->get('wizard.company'),
                'web' => session()->get('wizard.web'),
                'clients' => session()->get('wizard.clients'),
                'successes' => session()->get('wizard.successes'),
                'context' => session()->get('wizard.context'),
                'step' => '4'
            ]);
            break;
        
        default:
            return Inertia::render('Steps/Confirmation', [
                'step' => 'none'
            ]);
            break;
    } ($request->step);

})->name('confirmation');


Route::get('/step/5', function ()  {
    return Inertia::render('Steps/Five');
})->name('step-five');