<template>
  <div>
    
    <nav class="bg-white-500 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white text-xl font-bold">TripShare</router-link>
        <div class="hidden md:flex space-x-4 text-white"> 
          <router-link to="/" class="hover:underline">Home</router-link>
          
          <router-link to="/about" class="hover:underline">About</router-link>
          <router-link to="#" class="hover:underline" @click="logout">Logout</router-link>
        </div>
        <div class="md:hidden"> 
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <transition name="fade">
        <div v-if="isMenuOpen" class="md:hidden absolute top-12 right-0 left-50 w-full bg-blue-500 z-10">
          <div class="container mx-auto py-4">
            <router-link to="/" class="block text-white py-2">Home</router-link>
            
            <router-link to="/about" class="block text-white py-2">About</router-link>
            <router-link to="/login" class="block text-white py-2" @click="logout">Logout</router-link>
            
          </div>
        </div>
      </transition>
    </nav>

   
    <main class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
    
      <section class="md:w-1/3 md:mr-4">
        <div class="text-center text-white">
          <h1 class="text-3xl font-bold text-white">Welcome to TripShare!</h1>
          <p class="text-xl text-white- mt-4">Find rides or share your ride with others.</p>
        </div>
        <div class="flex justify-center mt-8">
          <router-link to="/landing">
            <button class="px-6 py-3 bg-green-500 text-black text-lg font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get Started</button>
          </router-link>
        </div>
      </section>

     
      <section class="md:w-1/3 md:ml-4 mt-12">
        <img class="mx-auto rounded-lg shadow-lg" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_558/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png" alt="Car Sharing">
      </section>
    </main>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      isMenuOpen: false // Initialize menu state
    };
  },
  methods: {
    toggleMenu() {
      console.log('toggleMenu method called');
      this.isMenuOpen = !this.isMenuOpen;
    },
    logout() {
      
      localStorage.removeItem('accessToken');
      
      
      const router = useRouter();
      router.push('/login');

      console.log('Logout method called');
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
