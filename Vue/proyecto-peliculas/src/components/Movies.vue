<template>
  <div class="article-item item-article" >
    <div class="article-img">
      <img
        :src="img+movies.poster_path"
        :alt="movies.title"
      />
    </div>
    <div class="article-container">
      <h2 class="article-title">{{ movies.title }}</h2>
      <p class="article-txt">
        {{ movies.overview }}
      </p>
      <span class="article-date">
        Release date: {{ movies.release_date }}
      </span>
      <router-link class="article-link" :to="'/movie/'+movies.id">Leer mas...</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Movies",
  props: ["movies"],
  data() {
    return {
      img: "https://image.tmdb.org/t/p/w500"
    };
  }
};
</script>
