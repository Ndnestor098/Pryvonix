<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/before-starting-steps', function (Request $request)  {

    $company = $request->company;
    $web = $request->web;
    $service = $request->service;

    return Inertia::render('BeforeStartingSteps', compact([
        'company',
        'web',
        'service',
    ]));
})->name('before-starting-steps');

Route::get('/step/1', function (Request $request)  {

    $company = $request->company;
    $web = $request->web;
    $service = $request->service;

    return Inertia::render('Steps/One', compact([
        'company',
        'web',
        'service',
    ]));
})->name('step-one');

Route::get('/step/2', function (Request $request)  {

    $company = $request->company;
    $web = $request->web;
    $service = $request->service;

    return Inertia::render('Steps/Two', compact([
        'company',
        'web',
        'service',
    ]));
})->name('step-two');