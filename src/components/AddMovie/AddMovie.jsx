import { useState } from 'react';
import { PropTypes } from 'prop-types';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

const AddMovie = ({ handleClose, handleSubmit }) => {
  const [visible, setVisible] = useState(null);

  return (
    <>
      <button onClick={() => setVisible(true)}>open add movie dialog</button>

      {visible && (
        <Dialog
          title={`Add movie`}
          handleClose={() => { handleClose(); setVisible(null); }}
        >
          <MovieForm
            onSubmit={(values) => { handleSubmit(values); setVisible(null); }}
          />
        </Dialog>
      )}
    </>
  );
}

AddMovie.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddMovie;
