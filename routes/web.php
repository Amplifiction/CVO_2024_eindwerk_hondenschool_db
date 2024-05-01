<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', function () {return Inertia::render('Home');});

Route::get('/register', [AuthController::class, 'register'])->name('register.get')->middleware('guest');
Route::post('/register', [AuthController::class, 'handleRegister'])->name('register.post')->middleware('guest');
