import { moviesApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const nowPlayingAction = async () =>
{
    try{
        const { data } = await moviesApi.get<MovieDBMoviesResponse>('/now_playing');
        
        const movies = data.results.map(movieDbMovie => MovieMapper.fromtheMovieDbToMovie(movieDbMovie))
        
        console.log(JSON.stringify(data, null, 2))
        
        return [];
    }catch(error)
    {
        console.log(error);
        throw 'Nose pido obtener las peliculas'
    }
};
