<template>
  <div>
    <div class="banner" :style="'background: url('+ulrimg+infoMovie.backdrop_path+'); text-align: left !important;'">
    <h1 class="info-title">{{infoMovie.title}}</h1>
    <h2 class="info-subtitle">{{infoMovie.tagline}}</h2>
    <ul class="info-nav">
      <li class="info-item" v-for="genero in genres" v-bind:key="genero.id">{{genero.name}}</li>
    </ul>
    <span class="info-vote">{{infoMovie.vote_count}} Votes</span>
  </div>
  <div class="info-container">
    <h2>Overview</h2>
    <p>{{infoMovie.overview}}</p>
    <span class="info-release"><strong>Release:</strong> {{infoMovie.release_date}}</span>
    <ul>
      <li>Lang: <strong>{{infoMovie.original_language}}</strong></li>
      <li>Runtime(MIN): <strong>{{infoMovie.runtime}}</strong></li>
      <li>Status: <strong>{{infoMovie.status}}</strong></li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: "InfoMovie",
  mounted() {
    this.id_movie_url = this.$route.params.id;
    this.movie();
  },
  data() {
    return {
      id_movie_url: null,
      infoMovie: [],
      ulrimg: 'https://image.tmdb.org/t/p/original',
      genres: []
    };
  },
  methods: {
    movie() {
      let url =
        "https://api.themoviedb.org/3/movie/" +
        this.id_movie_url +
        "?api_key=f09c976978949800e677b6523dd16d5e";
      fetch(url)
        .then(peliculas => {
          return peliculas.json();
        })
        .then(movie => {
          this.infoMovie = movie;
          this.genres = movie.genres;
          console.log(this.infoMovie);
        });
    }
  }
};
</script>
