<template>
  <header class="header">
    <div class="logo">
      <router-link to="/home" class="logo-link">Movies</router-link>
    </div>
    <nav class="nav">
      <ol class="menu">
        <li class="item-menu"><router-link to="/" class="item-link">Login</router-link></li>
        <li class="item-menu"><router-link to="/" class="item-link">Sing up</router-link></li>
      </ol>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent'
};
</script>
