<template>
  <div>
    <h2>Payment Option</h2>
    <button @click="showPaymentForm">Pay Now</button>
    <div v-if="showForm">
      <h3>Enter UPI Details</h3>
      <form @submit.prevent="makePayment">
        <label for="upiId">UPI ID:</label>
        <input type="text" id="upiId" v-model="upiId" required><br>
        <button type="submit">Make Payment</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      upiId: ''
    }
  },
  methods: {
    showPaymentForm() {
      this.showForm = true;
    },
    makePayment() {
      // Dummy payment logic
      console.log('Payment made with UPI ID:', this.upiId);
      // You can optionally emit an event here to notify the parent component
      alert('Payment successful!');
      // Reset form after payment
      this.showForm = false;
      this.upiId = '';
    }
  }
}
</script>
