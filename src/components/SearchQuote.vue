<template>
  <div class="searchQuote">
    <form v-on:submit.prevent="findQuote">
        <h3>You can search for a Quote from an Author!!</h3>
        <br />
        <label>Enter Author name here:</label>
        <input type="search" v-model="author" placeholder="eg. Mark Twain" />
        <button type="submit">Search</button>
        <button type="reset">Clear</button>
    </form>
    {{this.results}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "searchQuote",
  data() {
    return {
      author: null,
      body: null,
      results: null
    };
  },
  methods: {
    findQuote: function() {
      let author = encodeURI(this.author);
      fetch(`https://favqs.com/api/quotes?type=author&filter=${author}`,
        {
          headers: {
            'Authorization': 'Token token="533e74f5138651604d3a8a30491dca5c"'
          }
        })
        .then(response=> {
          return response.json();
        })
        .then(data => {
          this.results = data;
          console.log(JSON.stringify(data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>
