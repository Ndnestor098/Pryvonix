<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/before-starting-steps', function (Request $request)  {
    return Inertia::render('BeforeStartingSteps');
})->name('before-starting-steps');

Route::get('/step/1', function (Request $request)  {
    return Inertia::render('Steps/One');
})->name('step-one');

Route::get('/step/2', function (Request $request)  {

    $company = $request->company;
    $web = $request->web;
    

    return Inertia::render('Steps/Two', compact([
        'company',
        'web',
    ]));
})->name('step-two');

Route::get('/step/3', function (Request $request)  {

    $company = $request->company;
    $web = $request->web;
    $name = $request->name;
    $service = $request->service;

    return Inertia::render('Steps/Three', compact([
        'company',
        'web',
        'service',
        'name'
    ]));
})->name('step-three');

Route::get('/step/4', function (Request $request)  {

    $company = $request->company;
    $web = $request->web;
    $service = $request->service;

    return Inertia::render('Steps/Four', compact([
        'company',
        'web',
        'service',
    ]));
})->name('step-four');

Route::get('/step/5', function (Request $request)  {

    $company = $request->company;
    $web = $request->web;
    $service = $request->service;

    return Inertia::render('Steps/Five', compact([
        'company',
        'web',
        'service',
    ]));
})->name('step-five');