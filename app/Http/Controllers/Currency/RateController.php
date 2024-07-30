<?php

namespace App\Http\Controllers\Currency;

use App\Models\Rate;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class RateController extends Controller
{
    public function index()
    {
        $rates = Rate::latest()->get();

        //return view
        return inertia('Rate/Index', [
            'rates' => $rates
        ]);
    }

    public function create()
    {
        return inertia('Rate/AddRate');
    }

    public function edit(string $id)
    {
        $rate = Rate::findOrFail($id);
        return inertia('Rate/EditRate', ['rate' => $rate]);
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
        ];

        $this->validate($request, [
            'name'      => 'required',
            'value'      => 'required',
        ], $messages);
        Rate::create([
            'name'     => $request->name,
            'value'     => $request->value,
        ]);
        return redirect('/rate')->with('status', 'Berhasil!');
    }


    public function update(Request $request, $id)
    {
        $messages = [
            'required' => ':attribute is required!',
        ];
        $this->validate($request, [
            'name' => 'required',
            'value' => 'required',
        ], $messages);
        $rate = Rate::findOrFail($id);
        $rate->update([
            'name' => $request->name,
            'value' => $request->value,
        ]);

        return redirect('/rate')->with('status', 'Update Berhasil!');
    }

    public function destroy(Rate $rate)
    {
        $rate->delete();
        return redirect()->route('rate.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
