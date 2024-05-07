<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {return Inertia::render('Dashboard');})->name('dashboard');

Route::get('/register', [AuthController::class, 'register'])->name('register.get')->middleware('guest');
Route::post('/register', [AuthController::class, 'handleRegister'])->name('register.post')->middleware('guest');
Route::get('/login', [AuthController::class, 'login'])->name('login.get')->middleware('guest');
Route::post('/login', [AuthController::class, 'handleLogin'])->name('login.post')->middleware('guest');
Route::post('/logout', [AuthController::class, 'handleLogout'])->name('logout.post')->middleware('auth');

Route::get('/editProfile', [ProfileController::class, 'editProfile'])->name('editProfile.get')->middleware('auth');
Route::post('/editProfile', [ProfileController::class, 'handleEditProfile'])->name('editProfile.post')->middleware('auth');
Route::get('/editPassword', [ProfileController::class, 'editPassword'])->name('editPassword.get')->middleware('auth');
Route::post('/editPassword', [ProfileController::class, 'handleEditPassword'])->name('editPassword.post')->middleware('auth');
