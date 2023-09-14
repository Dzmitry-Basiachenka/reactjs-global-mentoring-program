import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { getGenres, getYear, getRuntime } from '../../utils/utils.js';
import styles from './styles.module.css';

const MovieDetails = ({ movie }) => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <img data-testid='movie-poster' className="img-fluid" src={movie.poster_path} alt={movie.title} />
                </Col>
                <Col md={9}>
                    <div className={styles.flexbox}>
                        <span data-testid='movie-title' className={styles.title}>{movie.title}</span>
                        {movie.vote_average && <span data-testid='movie-vote' className={styles.vote}>{movie.vote_average}</span>}
                    </div>
                    <p data-testid='movie-tagline'>{movie.tagline}</p>
                    {movie.genres && <p data-testid='movie-genres'>{getGenres(movie.genres)}</p>}
                    <p className={styles.flexbox}>
                        {movie.release_date && <span data-testid='movie-year' className={styles.year}>{getYear(movie.release_date)}</span>}
                        {movie.runtime && <span data-testid='movie-runtime' className={styles.runtime}>{getRuntime(movie.runtime)}</span>}
                    </p>
                    <p data-testid='movie-overview'>{movie.overview}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails;
