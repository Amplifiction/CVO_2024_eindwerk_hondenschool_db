<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DogController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MembershipController;

Route::get('/', [DashboardController::class, 'home'])->name('home')->middleware('guest');
Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard'); //->middleware('auth') //middleware vervangen door handmatige redirect. Zie Zie "eigen logboek.docx", 9/5/2024 voor details.
Route::get('/dashboardadmin', [DashboardController::class, 'dashboardAdmin'])->name('dashboard-admin');

//Route::get('/register', [AuthController::class, 'register'])->name('register.get')->middleware('guest');
Route::post('/register', [AuthController::class, 'handleRegister'])->name('register.post')->middleware('guest');
//Route::get('/login', [AuthController::class, 'login'])->name('login.get')->middleware('guest');
Route::post('/login', [AuthController::class, 'handleLogin'])->name('login.post')->middleware('guest');
Route::post('/logout', [AuthController::class, 'handleLogout'])->name('logout.post')->middleware('auth');

Route::get('/editProfile', [ProfileController::class, 'editProfile'])->name('editProfile.get')->middleware('auth');
Route::post('/editProfile', [ProfileController::class, 'handleEditProfile'])->name('editProfile.post')->middleware('auth');
Route::get('/editPassword', [ProfileController::class, 'editPassword'])->name('editPassword.get')->middleware('auth');
Route::post('/editPassword', [ProfileController::class, 'handleEditPassword'])->name('editPassword.post')->middleware('auth');

Route::get('/dogs/add', [DogController::class, 'add'])->name('dogs.add')->middleware('auth'); // view voor zowel store als addshared
Route::post('/dogs/store', [DogController::class, 'store'])->name('dogs.store')->middleware('auth');
Route::post('/dogs/addshared', [DogController::class, 'addShared'])->name('dogs.addshared')->middleware('auth');
//Route::get('/dogs', [DogController::class, 'index'])->name('dogs.index')->middleware('auth');
Route::get('/dogs/{dog}', [DogController::class, 'edit'])->name('dogs.edit')->middleware('auth');
Route::put('dogs/{dog}', [DogController::class, 'update'])->name('dogs.update')->middleware('auth');
Route::delete('/dogs/{dog}', [DogController::class, 'destroy'])->name('dogs.destroy')->middleware('auth');

Route::get('/memberships/create', [MembershipController::class, 'create'])->name('memberships.create')->middleware('auth');
Route::post('/memberships/store', [MembershipController::class, 'store'])->name('memberships.store')->middleware('auth');
Route::put('/memberships/{membership}', [MembershipController::class, 'setStatus'])->name('membership.setstatus')->middleware('auth');
Route::delete('memberships/{membership}', [MembershipController::class, 'destroy'])->name('memberships.destroy')->middleware('auth');
