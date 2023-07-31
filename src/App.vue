<template>
  <Header/>
  <Navbar/>
  <RouterView />
  <Footer/>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
