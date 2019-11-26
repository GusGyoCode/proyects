<template>
  <div class="banner">
    <form @submit.prevent="Search()">
      <div class="item-form">
        <label htmlFor="seach">You Favorite Movies.</label>
        <input
          class="item-text"
          type="text"
          name="seach"
          htmlId="seach"
          placeholder="Search for a movie"
          required
          v-model="search"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Search",
  data(){
    return{
      search: ""
    }
  },
  methods:{
    Search(){
      this.$emit('search', this.search);
    }
  }
};
</script>
