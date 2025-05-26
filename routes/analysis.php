<?php

use App\Http\Controllers\PromptController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function ()  {
    
    return Inertia::render('Analysis/Index');
});