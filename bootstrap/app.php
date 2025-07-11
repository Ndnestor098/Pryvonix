<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function () {
            Route::prefix('/')
                ->name('home.')
                ->group(base_path('routes/home.php'));
            Route::prefix('/ai')
                ->name('ai')
                ->group(base_path('routes/prompt.php'));
            Route::prefix('/analisis')
                ->name('analysis.')
                ->group(base_path('routes/analysis.php'));
            Route::prefix('/casos')
                ->name('cases.')
                ->group(base_path('routes/cases.php'));
            Route::prefix('/images')
                ->name('images.')
                ->group(base_path('routes/images.php'));
            Route::prefix('/perfil')
                ->name('profile.')
                ->group(base_path('routes/profile.php'));
            Route::prefix('/content-generator')
                ->name('content-generator.')
                ->group(base_path('routes/content_generator.php'));
        }
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        if(env('APP_ENV') === 'production') {
            $middleware->trustProxies(
                at: '*',
                headers: Request::HEADER_X_FORWARDED_FOR |
                         Request::HEADER_X_FORWARDED_HOST |
                         Request::HEADER_X_FORWARDED_PORT |
                         Request::HEADER_X_FORWARDED_PROTO |
                         Request::HEADER_X_FORWARDED_AWS_ELB
            );
        }
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
