<script>
  import axios from 'axios';
  import { store } from './store/';

  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default {
    data() {
      return {
        store,
      }
    },

    components: { AppHeader, AppMain },

    methods: {
      fetchMovies(searchedTerm) {
        axios.get(this.store.api.uri + '/search/movie',
          {
            params: {
              api_key: store.api.key,
              query: searchedTerm
            }
          }
        ).then((response) => {
          store.movies = response.data.results.map( (movie) => {
            return {
              id: movie.id,
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: Math.ceil(movie.vote_average / 2),
              poster_path: movie.poster_path
            }
          })
        })
      },

      fetchTVSeries(searchedTerm) {
        axios.get(this.store.api.uri + '/search/tv',
          {
            params: {
              api_key: store.api.key,
              query: searchedTerm
            }
          }
        ).then((response) => {
          store.TVseries = response.data.results.map( (TVserie) => {
            return {
              id: TVserie.id,
              name: TVserie.name,
              original_title: TVserie.original_name,
              language: TVserie.original_language,
              vote: Math.ceil(TVserie.vote_average / 2),
              poster_path: TVserie.poster_path
            }
          })
        })
      },


      startResearch(searchedTerm) {
        this.fetchMovies(searchedTerm);
        this.fetchTVSeries(searchedTerm);
      },


    },

    components: {AppHeader, AppMain}
  }
</script>

<template>
  <app-header @searchEvent="startResearch" />
  <app-main />

</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/_variables.scss';
</style>
