<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\LoginNeedsVerification;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function submit(Request $request)
    {
        //validate the phone number
        $request->validate([
            'phone' => 'required|numeric|min:10' 
        ]);

        //find or create a user model
        $user = User::firstOrCreate([
            'phone' => $request->phone
        ]);

        if(!$user){
            return response()->json(['message' => 'Could not process a user with that phone number. '], 401);
        }

        // send user otp
        $user->notify(new LoginNeedsVerification());

        // return back a response
        return response()->json(['message' => 'Text message notification sent.']);
    }

    public function verify(Request $request)
    {
        $request->validate([
            'phone' => 'required|numeric|min:10',
            'login_code' => 'required|numeric|between:111111,999999'
        ]);

        $user = User::where('phone', $request->phone)
            ->where('login_code', $request->login_code)
            ->first();

        if ($user)
        {
            $user->update([
                'Login_code' => null
            ]);
            return $user->createToken($request->login_code)->plainTextToken;
        }

        return response()->json(['message' => 'Invalid verification code.'], 401);
    }
  
    
}