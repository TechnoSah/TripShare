<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;

class PaymentController extends Controller
{
    public function processPayment(Request $request)
    {
        Stripe::setApiKey('sk_test_51P1N1xSErGNjIuwaZRjEmR8kEm2VzhbQ6jXmJzEKyxMsRFOMTFcwrC7tojxHefiGBGbFlVUIo880F4gWLrMP2IDi00H4sCd4Re');

        try {
            $charge = Charge::create([
                'amount' => 100, 
                'currency' => 'INR',
                'source' => $request->token,
                'description' => 'Fare',
            ]);

            return response()->json(['success' => true, 'message' => 'Payment successful']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }
}
