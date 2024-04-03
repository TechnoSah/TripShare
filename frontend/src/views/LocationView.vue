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
        <h1 class="text-3xl text-white font-semibold mb-4">Where are we going?</h1>
        <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
            <img class="w-full object-contain" src="https://img.freepik.com/free-vector/man-with-map-smartphone-renting-car-driver-using-car-sharing-app-phone-searching-vehicle-vector-illustration-transport-transportation-urban-traffic-location-app-concept_74855-10109.jpg?w=826&t=st=1709882470~exp=1709883070~hmac=f02750e019d7b572a916ed78cb8acceb68ff3e1c35da9f34c8a5e16f45e2fb5b" />
            </div>
        <form action="#">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <GMapAutocomplete
                            placeholder="My destination" 
                            @place_changed="handleLocationChanged"   
                            class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none">
                        </GMapAutocomplete>
                        </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button 
                        @click.prevent="handleSelectLocation"
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Find A Ride
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>


<script setup>
import { useLocationStore } from '@/stores/location';
import { useRouter } from 'vue-router';




const location = useLocationStore();
const router = useRouter()
const handleLocationChanged = (e) => {
    console.log('handleLocationChanged', e)
    location.$patch({
        destination: {
            name: e.name,
            address: e.formatted_address,
            geometry: {
                lat: e.geometry.location.lat(),
                lng: e.geometry.location.lng()
            }
        }
    })
}

const handleSelectLocation = () => {
    if(location.destination.name !== ''){
        router.push({
            name: 'map'
        })
    }
    
}


</script>


