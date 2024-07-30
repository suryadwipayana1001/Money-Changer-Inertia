<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          //get all user
          $users = User::latest()->get();

          //return view
          return inertia('Auth/Index', [
              'users' => $users
          ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        return inertia('Auth/Edit', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        /**
         * validate request
         */
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
            'email'     => 'required|unique:users,email,' . $id,
            'password'  => 'nullable|confirmed',
            'level'     => 'required'
        ],$messages,$customAttributes);

        /**
         * update user
         */
        $user = User::findOrFail($id);
        $user->update([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => $request->password ? bcrypt($request->password) : $user->password,
            'level'     => $request->level,
        ]);

        //redirect
        return redirect()->route('user.index')->with('success', 'User updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
         //delete user
         $user->delete();

         //redirect
         return redirect()->route('user.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
