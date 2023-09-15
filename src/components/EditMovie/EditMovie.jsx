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
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string
  }),
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default EditMovie;
