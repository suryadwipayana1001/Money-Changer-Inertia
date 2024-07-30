<?php

namespace App\Http\Controllers\Currency;

use App\Models\Money;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class MoneyController extends Controller
{
    public function index()
    {
        $money = Money::latest()->get()->map(function ($item) {

            $item->foto = Storage::url('fotos/' . $item->foto);
            return $item;
        });

        return inertia('Money/Index', [
            'money' => $money
        ]);
    }
    public function create()
    {
        return inertia('Money/AddCurrency');
    }

    public function edit(string $id)
    {
        $money = Money::findOrFail($id);
        return inertia('Money/EditCurrency', ['money' => $money]);
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        $messages = [
            'required' => ':attribute is required!',
            'foto.image' => 'The foto must be an image.',
            'foto.mimes' => 'The foto must be a file of type: jpeg, png, jpg.',
        ];

        $this->validate($request, [
            'foto' => 'required|image|mimes:jpeg,png,jpg',
            'country'      => 'required',
            'buy'      => 'required',
            'sell'      => 'required',
        ], $messages);

        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $foto = $request->file('foto');
            $fotoPath = $foto->store('public/fotos');
        }
        /**
         * create user
         */

        Money::create([
            'foto' => $fotoPath ? basename($fotoPath) : null,
            'country'     => $request->country,
            'buy'     => $request->buy,
            'sell'     => $request->sell,
        ]);
        return redirect('/money')->with('status', 'Register Berhasil!');
    }


    public function update(Request $request, $id)
    {
        $messages = [
            'required' => ':attribute is required!',
            'foto.image' => 'The foto must be an image.',
            'foto.mimes' => 'The foto must be a file of type: jpeg, png, jpg.',
        ];
        $this->validate($request, [
            'foto' => 'nullable|image|mimes:jpeg,png,jpg',
            'country' => 'required',
            'buy' => 'required',
            'sell' => 'required',
        ], $messages);
        $money = Money::findOrFail($id);
        $fotoPath = $money->foto;
        if ($request->hasFile('foto')) {
            if ($fotoPath && Storage::exists('public/fotos/' . $fotoPath)) {
                Storage::delete('public/fotos/' . $fotoPath);
            }
            $foto = $request->file('foto');
            $fotoPath = $foto->store('public/fotos');
        }
        $money->update([
            'foto' => $fotoPath ? basename($fotoPath) : $money->foto,
            'country' => $request->country,
            'buy' => $request->buy,
            'sell' => $request->sell,
        ]);

        return redirect('/money')->with('status', 'Update Berhasil!');
    }

    public function destroy(Money $money)
    {
        $money->delete();
        return redirect()->route('money.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
