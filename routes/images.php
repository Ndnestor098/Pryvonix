<?php

use App\Http\Controllers\PromptController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function ()  {
    
    return "Test";
    return Inertia::render();
})->name('index');