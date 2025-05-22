<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenRouterService
{
    public function sendMessage(string $message, string $model = 'mistralai/mistral-7b-instruct')
    {
        $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . config('services.openrouter.key'),
                'HTTP-Referer' => 'http://127.0.0.1:8000/', // cambia por tu dominio o localhost
                'X-Title' => 'Mi Prueba Laravel con OpenRouter',
            ])
            ->post(config('services.openrouter.base_uri') . 'chat/completions', [
                'model' => $model,
                'messages' => [
                    ['role' => 'user', 'content' => $message]
                ]
            ]);

        return $response;
    }
}
