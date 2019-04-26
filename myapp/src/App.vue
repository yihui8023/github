<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
import '../static/remScale'
import '../node_modules/swiper/dist/js/swiper.min';
export default {
  name: 'App'
}
</script>

<style>
@import '../static/reset';
@import '../node_modules/swiper/dist/css/swiper.min';
html{
  -webkit-text-size-adjust: none;
font-size: 100px;
}
</style>
