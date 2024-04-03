<template>
    <div class="custom-bg-color">
      
      <nav class="p-4">
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
      <section class="md:w-1/2 md:mx-auto mt-12">
      
      <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-white">About TripShare</h1>
      <p class="text-xl text-white mt-4">TripShare is a platform for finding and sharing rides with others. Our mission is to make transportation more efficient and sustainable by connecting people who are traveling in the same direction.</p>
    </div>
  </section>
      <main class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        
        <section class="md:w-1/2 md:mx-auto mt-12">
  <div class="flex justify-center items-center">
    <div class="max-w-md">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
      <p class="text-lg text-white">At TripShare, we are committed to revolutionizing the way people travel. Our platform connects travelers with drivers, making transportation more efficient, affordable, and eco-friendly.</p>
      <p class="text-lg text-white mt-4">Whether you're commuting to work, planning a weekend getaway, or embarking on a cross-country road trip, TripShare is your go-to solution for hassle-free transportation.</p>
    </div>
  </div><br>
  <div class="mt-8 md:flex justify-center items-center">
    
    <div class="md:w-1/1 mt-8 md:mt-0 md:ml-6">
      <h3 class="text-xl md:text-2xl font-bold text-white mb-4">Why Choose TripShare?</h3>
      <p class="text-lg text-white">- Convenient ridesharing options for every occasion</p>
      <p class="text-lg text-white">- Secure and reliable transportation services</p>
      <p class="text-lg text-white">- Affordable fares with transparent pricing</p>
      <p class="text-lg text-white">- Environmentally friendly travel solutions</p>
      <p class="text-lg text-white mt-4">Join TripShare today and experience the future of transportation!</p>
    </div>
  </div>
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
  .custom-bg-color {
    background-image: linear-gradient(to bottom right, purple, blue);
}
  </style>
  