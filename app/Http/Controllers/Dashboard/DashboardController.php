<?php

namespace App\Http\Controllers\Dashboard;
use App\Models\Money;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Rate;
use Illuminate\Support\Facades\Storage;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $rates = Rate::latest()->get();
        $money = Money::latest()->get()->map(function ($item) {

            $item->foto = Storage::url('fotos/' . $item->foto);
            return $item;
        });

        return Inertia::render('Dashboard/Index', [
            'money' => $money,
            'rates'=>$rates
        ]);
    }
    public function currency(){
        $rates = Rate::latest()->get();
        $money = Money::latest()->get()->map(function ($item) {

            $item->foto = Storage::url('fotos/' . $item->foto);
            return $item;
        });

        return inertia('Dashboard/Currency', [
            'money' => $money,
            'rates'=>$rates
        ]);
    }
}
