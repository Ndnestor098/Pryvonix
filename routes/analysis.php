<?php

use App\Http\Controllers\AnalysisController;
use App\Http\Controllers\PromptController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function ()  {
//     to_route('analysis.result');
// })->name('index');

Route::get('/resultados', [AnalysisController::class, 'result'])->name('results');

Route::get('/problemas', [AnalysisController::class, 'problems'])->name('problems');

Route::get('/caso-de-uso', [AnalysisController::class, 'cases'])->name('cases');