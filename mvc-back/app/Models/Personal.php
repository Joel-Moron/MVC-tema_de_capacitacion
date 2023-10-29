<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    use HasFactory;
    //public $timestamps = false;
    protected $table = 'personal';
    protected $fillable = [
        'nombre',
        'ape_paterno',
        'ape_materno',
        'num_dni'
    ];
}
