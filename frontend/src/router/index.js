import { createRouter, createWebHistory } from 'vue-router'
import fastDeepEqual from 'fast-deep-equal';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import LoginView from '@/views/LoginView.vue'
import LandingView from '@/views/LandingView.vue'
import LocationView from '@/views/LocationView.vue'
import MapView from '@/views/MapView.vue'
import TripView from '@/views/TripView.vue'
import StandbyView from '@/views/StandbyView.vue';
import DriverView from '@/views/DriverView.vue';
import DrivingView from '@/views/DrivingView.vue';
import PaymentOption from '@/views/PaymentOption.vue';




import axios from 'axios';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }, 
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/location',
      name: 'location',
      component : LocationView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/trip',
      name: 'trip',
      component: TripView
    },
    {
      path: '/standby',
      name: 'standby',
      component: StandbyView
    },
    {
      path: '/driver',
      name: 'driver',
      component: DriverView
    },
    {
      path: '/driving',
      name: 'driving',
      component: DrivingView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentOption
    }
  ]
})

router.beforeEach((to, from) => {
  if(to.name === 'login') {
    return true
  }

  if(!localStorage.getItem('token')) {
    return{
      name: 'login'
    }
  }

  checkTokenAuthenticity()
})




const checkTokenAuthenticity = () => {
  axios.get('http://localhost/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((response) => {})
  .catch((error) => {
    localStorage.removeItem('token')
    router.push({
      name: 'login'
    })
  })
}


export default router
