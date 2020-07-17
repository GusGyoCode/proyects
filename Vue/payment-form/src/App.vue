<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  }
};
</script>

<style>
@import "assets/css/fontello.css";

@media screen and (max-width: 991px) {
  #formulariodepago {
    height: 450px !important;
  }
}
@media screen and (max-width: 991px) {
  #formulariodepago {
    height: 450px !important;
  }
}
@media screen and (max-width: 575px) {
  .title-2 h2 {
    font-size: 16px !important;
  }
  .title-2 h2 img {
    width: 20px !important;
    height: 20px !important;
  }
}
</style>
