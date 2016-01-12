<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;
use Hash;
use App\Http\Requests\UserCreate;
use App\User;
class UserController extends Controller
{

    /**
     * Return all users.
     */
    public function getAll()
    {
        return User::all();
    }

    /**
     * Create new user
     */
    public function store(UserCreate $request,User $user)
    {
        $user->name       = $request->name;
        $user->email      = $request->email;
        $user->password   = Hash::make($request->password);
        $user->permission = $request->permission;
        $user->save();
        return response($user,201);
    }


    public function delete($id)
    {
        $user = User::find($id);
        $user->delete();
        return response('done',200);
    }

	/**
	 * Authenticate user data.
	 */
    public function login(Request $request)
    {
    	if( !Auth::attempt(['email'=>$request->email,'password'=>$request->password]) )
    	{
            return response('البريد الألكترونى أو الرقم السرى خطأ',403);
    	}
        return response(Auth::user(),201);
    }

    /**
     * Return User Respon
     */
    public function getUserResposibiltiy($id) 
    {
        if( $id != 0 )
        {
            $user  = User::find($id);
            return $user->name;
        }
        return null;
    }
    
    /**
     * Return user by id.
     */
    public function getById($id)
    {
        return User::find($id);
    }

    /**
     * Update user.
     */
    public function update(Request $request)
    {
        $user             = User::find($request->id);
        $user->name       = $request->name;
        $user->email      = $request->email;
        if( $request->password != "" )
        {
            $user->password   = Hash::make($request->password);
        }
        $user->permission = $request->permission;
        $user->save();
        return response($user,201);
    }
}
