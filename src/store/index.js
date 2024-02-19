import { reactive } from 'vue'

export const store = reactive({
  api: {
    uri: 'https://api.themoviedb.org/3',
    key: 'ec11e6d7deedf762c38860797f706a8c'
  },

  movies: [],
  TVseries: []
  
})