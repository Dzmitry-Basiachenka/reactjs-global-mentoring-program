import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { getGenres, getYear } from '../../utils/utils.js';
import styles from './styles.module.css';

const MovieTitle = ({ movie }) => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <img data-testid='movie-poster' className="img-fluid" src={movie.poster_path} alt={movie.title} />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <p className={styles.flexbox}>
                        <span data-testid='movie-title' className={styles.title}>{movie.title}</span>
                        {movie.release_date && <span data-testid='movie-year' className={styles.year}>{getYear(movie.release_date)}</span>}
                    </p>
                    {movie.genres && <p data-testid='movie-genres'>{getGenres(movie.genres)}</p>}
                </Col>
            </Row>
        </Container>
    )
}

export default MovieTitle;
