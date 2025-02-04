<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/auth', AuthController::class)->middleware('api');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
