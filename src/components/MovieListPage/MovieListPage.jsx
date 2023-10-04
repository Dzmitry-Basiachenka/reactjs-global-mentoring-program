import React from 'react';
import PropTypes from 'prop-types';

import MovieTile from '../../components/MovieTile/MovieTile';
import styles from './styles.module.css';

const MovieListPage = ({ movies, setSelectedMovie }) => {
    return (
        <div className={styles.grid}>
            {movies &&
                movies.map(movie => (
                    <MovieTile
                        key={movie.id}
                        movie={movie}
                        handleClick={setSelectedMovie}
                    />
                ))}
        </div>
    )
}

MovieListPage.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MovieListPage;
