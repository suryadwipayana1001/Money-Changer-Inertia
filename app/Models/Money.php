<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Money extends Model
{
    use HasFactory;
    protected $table = 'money';
    protected $fillable = [
        'foto',
        'country',
        'buy',
        'sell',
    ];
}
