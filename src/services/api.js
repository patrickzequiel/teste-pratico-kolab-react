import axios from 'axios'

const api = axios.create({ 
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=e2e6c0526e3737f2381684d2fd63d354&language=en-US&query=marvel&page=1&include_adult=false'
    //baseURL: 'http://api.themoviedb.org/3/movie/76341?api_key=e2e6c0526e3737f2381684d2fd63d354' 
});

export default api;