<template>
  <Header v-if="$route.path !== '/login' && $route.path !== '/register'"></Header>
  <Navbar v-if="$route.path !== '/login' && $route.path !== '/register'"></Navbar>
  <RouterView />
  <Footer v-if="$route.path !== '/login' && $route.path !== '/register'"></Footer>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>
