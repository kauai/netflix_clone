const API_KEY = '64ba81b8c2e2da731434b5e3dd22c42b'
const BASE_API = 'https://api.themoviedb.org/3'


/**
 * Originais da netflix
 * Recomendados (trends)
 * Em alta to reated
 * açao
 * comedia
 * terror
 * romance
 * documentarios
 */

export default {
    async geHomeList() {
        return [
            {
                slug:'originals',
                title:'Originais do netflix',
                items:await this.basicFetch(`/discover/tv?with_network=213&`)
            },
            {
                slug:'trending',
                title:'Recomendados para voce',
                items:await this.basicFetch(`/trending/all/week?`)
            },
            {
                slug:'topreated',
                title:'Em alta',
                items:await this.basicFetch(`/movie/top_rated?`)
            },
            {
                slug:'action',
                title:'Açao',
                items:await this.basicFetch(`/discover/movie?with_genres=28&`)
            },
            {
                slug:'comedy',
                title:'Comedia',
                items:await this.basicFetch(`/discover/movie?with_genres=35&`)
            },
            {
                slug:'horror',
                title:'Terror',
                items:await this.basicFetch(`/discover/movie?with_genres=27&`)
            },
            {
                slug:'romance',
                title:'Romance',
                items:await this.basicFetch(`/discover/movie?with_genres=10749&`)
            },
            {
                slug:'documentary',
                title:'Documentarios',
                items:await this.basicFetch(`/discover/movie?with_genres=99&`)
            }
        ]
    },
    async basicFetch(endpoint) {
      const req = await fetch(`${BASE_API}${endpoint}language=pt-BR&api_key=${API_KEY}`);
      const json = await req.json();
      return json;
    },
    async getMovieInfo(movieid,type) {
      return type === 'movie' 
       ? await this.basicFetch(`/movie/${movieid}?`)
       : await this.basicFetch(`/tv/${movieid}?`)
    }
}