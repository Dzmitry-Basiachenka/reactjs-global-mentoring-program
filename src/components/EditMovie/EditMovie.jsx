import { useState } from 'react';
import { PropTypes } from 'prop-types';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

const EditMovie = ({ movie, handleClose, handleSubmit }) => {
  const [visibleMovie, setVisibleMovie] = useState(null);

  return (
    <>
      <button onClick={() => setVisibleMovie(movie)}>open edit movie dialog</button>

      {visibleMovie && (
        <Dialog
          title={`Edit movie`}
          handleClose={() => { handleClose(); setVisibleMovie(null); }}
        >
          <MovieForm
            movie={visibleMovie}
            onSubmit={(values) => { handleSubmit(values); setVisibleMovie(null); }}
          />
        </Dialog>
      )}
    </>
  );
}

EditMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default EditMovie;
