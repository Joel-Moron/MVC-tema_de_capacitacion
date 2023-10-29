<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\PersonalController;

Route::get('/personal/get', [PersonalController::class,'index']);
Route::post('/personal/create', [PersonalController::class,'store']);
