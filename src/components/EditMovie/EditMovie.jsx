import { useState } from 'react';
import { PropTypes } from 'prop-types';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { movieType } from '../../constants/types.js';

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
  movie: movieType.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default EditMovie;
