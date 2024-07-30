<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// initial route
Route::redirect('/', '/login');

//route index login
Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'index']);
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store']);
//middleware auth and user role

//middlware auth
Route::middleware('auth')->group(function () {
    //route user
    Route::resource('/user', \App\Http\Controllers\Auth\UserController::class);
    //route cureency
    Route::resource('/money', \App\Http\Controllers\Currency\MoneyController::class);
    Route::resource('/rate', \App\Http\Controllers\Currency\RateController::class);
    //route dashboard
    Route::match(['get', 'post'], '/dashboard', \App\Http\Controllers\Dashboard\DashboardController::class);
    Route::get('/currency', [\App\Http\Controllers\Dashboard\DashboardController::class, 'currency']);
    //route index register
    Route::get('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'index']);
    Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store']);
    //route logout
    Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'destroy']);
});
