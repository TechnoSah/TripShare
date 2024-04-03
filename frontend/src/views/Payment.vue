<template>
    <div class="pt-16">
    <h1 class="text-3xl text-white font-semibold mb-4">Payment</h1>
    <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left item-center">
        <div class="bg-white px-4 py-5 sm:p-6">
                <div class="flex justify-between">
      <form @submit.prevent="processPayment">
        Card Number: 
        <input type="text" v-maska data-maska="#### #### #### ####" placeholder="Card Number" v-model="cardNumber" required ><br>
        Expiry Date: 
        <input type="text" placeholder="MM/YY" v-model="expiry" required><br>
        CVC
        <input type="text" placeholder="CVC" v-model="cvc" required maxlength="3"><br><br>

        <button 
        @click="submit"
        class="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
            Pay Now
        </button>
      </form>
      </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { vMaska } from 'maska'
  import { Stripe } from 'stripe';

export default {
  data() {
    return {
      cardNumber: '',
      expiry: '',
      cvc: '',
    };
  },
  methods: {
    async makePayment() {
      const stripe = Stripe('pk_test_51P1N1xSErGNjIuwaqs8k28Bugcrp4XwAyHbzVm9JbRYz4FbzQ4RbvmAU1PX8idwZN2OywwS1Vlgubiu8ShWvPvft00kY4CBpL6');
      const { token, error } = await stripe.createToken('card', {
        number: this.cardNumber,
        exp_month: this.expiry.split('/')[0],
        exp_year: this.expiry.split('/')[1],
        cvc: this.cvc,
      });

      if (error) {
        console.error(error);
        
      } else {
        
        this.sendToken(token.id);
      }
    },
    async sendToken(token) {
      try {
        const response = await axios.post('/process-payment', { token });
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
        
      }
    },
  },
};
  </script>
  