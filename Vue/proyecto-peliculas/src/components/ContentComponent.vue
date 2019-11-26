<template>
  <div class="as">
    <Search @search="querySearch" />
    <main v-if="verification" class="main">
      <div class="container">
        <h2 class="main-title">Search for "{{ this.search }}"</h2>
        <div class="inputs">
          <input type="radio" value="2" v-model="vote" id="1" class="input-radio" />
          <label for="1" class="icon-star" id="star1"></label>
          <input type="radio" value="4" v-model="vote" id="2" class="input-radio" />
          <label for="2" class="icon-star" id="star2"></label>
          <input type="radio" value="6" v-model="vote" id="3" class="input-radio" />
          <label for="3" class="icon-star" id="star3"></label>
          <input type="radio" value="8" v-model="vote" id="4" class="input-radio" />
          <label for="4" class="icon-star" id="star4"></label>
          <input type="radio" value="10" v-model="vote" id="5" class="input-radio" />
          <label for="5" class="icon-star" id="star5"></label>
        </div>
        <article v-for="pelicula in movies2" v-bind:key="pelicula.id">
          <Movies v-if="pelicula.vote_average < vote" :movies="pelicula" />
        </article>
      </div>
    </main>
    <main v-if="!verification" class="main">
      <div class="container">
        <h2 class="main-title">Popular movies</h2>
        <div class="inputs">
          <input type="radio" value="2" v-model="vote" id="1" class="input-radio" />
          <label for="1" class="icon-star" id="star1"></label>
          <input type="radio" value="4" v-model="vote" id="2" class="input-radio" />
          <label for="2" class="icon-star" id="star2"></label>
          <input type="radio" value="6" v-model="vote" id="3" class="input-radio" />
          <label for="3" class="icon-star" id="star3"></label>
          <input type="radio" value="8" v-model="vote" id="4" class="input-radio" />
          <label for="4" class="icon-star" id="star4"></label>
          <input type="radio" value="10" v-model="vote" id="5" class="input-radio" />
          <label for="5" class="icon-star" id="star5"></label>
        </div>
        <article v-for="pelicula in movies" v-bind:key="pelicula.id">
          <Movies v-if="pelicula.vote_average < vote" :movies="pelicula" />
        </article>
      </div>
    </main>
  </div>
</template>
<script>
import Search from "./Search.vue";
import Movies from "./Movies.vue";
export default {
  name: "ContentComponent",
  components: {
    Search,
    Movies
  },
  created() {
    this.query();
  },
  mounted() {
    console.log(this.movies);
    const btn = document.querySelector('#star1');
    const btn1 = document.querySelector('#star2');
    const btn2 = document.querySelector('#star3');
    const btn3 = document.querySelector('#star4');
    const btn4 = document.querySelector('#star5');
    
    btn.addEventListener("click", function() {
      btn.classList.add("color");
      btn1.classList.remove("color");
      btn2.classList.remove("color");
      btn3.classList.remove("color");
      btn4.classList.remove("color");
    });
    btn1.addEventListener("click", function() {
      btn.classList.add("color");
      btn1.classList.add("color");
      btn2.classList.remove("color");
      btn3.classList.remove("color");
      btn4.classList.remove("color");
    });
    btn2.addEventListener("click", function() {
      btn.classList.add("color");
      btn1.classList.add("color");
      btn2.classList.add("color");
      btn3.classList.remove("color");
      btn4.classList.remove("color");
    });
    btn3.addEventListener("click", function() {
      btn.classList.add("color");
      btn1.classList.add("color");
      btn2.classList.add("color");
      btn3.classList.add("color");
      btn4.classList.remove("color");
    });
    btn4.addEventListener("click", function() {
      btn.classList.add("color");
      btn1.classList.add("color");
      btn2.classList.add("color");
      btn3.classList.add("color");
      btn4.classList.add("color");
    });
  },
  data() {
    return {
      movies: [],
      movies2: [],
      verification: null,
      search: "",
      vote: 10
    };
  },
  methods: {
    query() {
      let url =
        "https://api.themoviedb.org/3/discover/movie?api_key=f09c976978949800e677b6523dd16d5e";
      fetch(url)
        .then(reply => {
          return reply.json();
        })
        .then(Movies => {
          this.movies = Movies.results;
        });
    },
    querySearch(search) {
      this.search = search;
      let url =
        "https://api.themoviedb.org/3/search/movie?api_key=f09c976978949800e677b6523dd16d5e&query=" +
        search;
      fetch(url)
        .then(reply => {
          return reply.json();
        })
        .then(Movies => {
          this.movies2 = Movies.results;
          console.log(this.movies2);
        });
      this.verification = true;
    }
  }
};
</script>
<style>
.input-radio {
  display: none;
}
.icon-star {
  cursor: pointer;
  color: #ccc;
  font-size: 30px;
}
.icon-star:hover {
  color: rgb(240, 204, 0);
}
.color{
  color: rgb(240, 204, 0);
}
</style>
