<template>
  <div id="app">
    <HeaderComponent/>
    <!--<ContentComponent/>-->
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
//import ContentComponent from './components/ContentComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'app',
  components:{
    HeaderComponent,
    //ContentComponent,
    FooterComponent
  }
}
</script>

<style>
@import './assets/style.css';
@import './assets/fontello.css';
</style>
