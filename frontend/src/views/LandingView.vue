<template>
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
    <div class="pt-16">
        
        <h1 class="text-3xl text-white font-semibold mb-4">TripShare</h1>
        <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
            <img class="w-full object-contain" src="https://img.freepik.com/free-vector/car-sharing-concept-illustration_114360-15011.jpg?w=740&t=st=1709881785~exp=1709882385~hmac=adb1e55192c72fa342811ae40df52b6a3e2bfc74abddd2ca6251e0e8e6e3ed2c" />
            </div>
        <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
            
            <div class="bg-white px-4 py-5 sm:p-6">
                <div class="flex justify-between">
                    <button
                        @click="handleStartDriving"
                        class="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Start Driving
                    </button>
                    <button
                        @click="handleFindARide"
                        class="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Find A Ride
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import http from '@/helpers/http'

const router = useRouter()
const handleStartDriving = () => {
    http().get('/api/driver')
        .then((response) => {
            if (response.data.driver) {
                router.push({
                    name: 'standby'
                })
            } else {
                router.push({
                    name: 'driver'
                })
            }
        })
        .catch((error) => {
            console.error(error);
        })
}
const handleFindARide = () => {
    router.push({
        name: 'location'
    })
}
</script>