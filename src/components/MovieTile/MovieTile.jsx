import React from 'react';

import { getGenres, getYear } from '../../utils/utils.js';
import posterNotAvailable from '../../assets/images/poster-not-available.jpg';

const MovieTile = ({ movie, handleClick }) => {

    const handleImageError = ({ target }) => {
        target.src = posterNotAvailable;
        target.alt = 'Poster not available';
    };

    return (
        <div data-testid='movie-tile' className='border' onClick={() => handleClick(movie)}>
            <div>
                <img
                    data-testid='movie-tile-poster'
                    className='img-fluid'
                    src={movie.poster_path}
                    alt={movie.title}
                    onError={handleImageError}
                />
            </div>
            <div>
                <div>
                    <span data-testid='movie-tile-title' className='h5 float-begin'>{movie.title}</span>
                    {movie.release_date && <span data-testid='movie-tile-year' className='h5 m-2 border border-2 rounded float-begin'>{getYear(movie.release_date)}</span>}
                </div>
                {movie.genres && <div data-testid='movie-tile-genres'>{getGenres(movie.genres)}</div>}
            </div>
        </div>
    )
}

export default MovieTile;
