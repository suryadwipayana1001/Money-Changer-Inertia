<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        return inertia('Auth/Register');
    }

    public function showUser()
    {
        return inertia('Auth/Index');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        $messages =[
            'required'=>':attribute is required !',
            'confirmed'=>'password not match with confirm password !',
            'email'=>'wrong email address !'
        ];
        $customAttributes = [
            'name' => 'nama',
        ];
        $this->validate($request, [
            'name'      => 'required',
            'email'     => 'required|unique:users|email',
            'password'  => 'required|confirmed',
        ],$messages,$customAttributes);

        /**
         * create user
         */

        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password),
        ]);

        //redirect
        // return redirect('/login')->with('status', 'Register Berhasil!');
        return redirect('/user')->with('status', 'Register Berhasil!');
    }
}
