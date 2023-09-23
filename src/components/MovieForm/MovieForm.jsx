import React from 'react';
import { PropTypes } from 'prop-types';
import { Formik, Form } from 'formik';
import { Container, Row, Modal, Button } from 'react-bootstrap';

import AreaField from '../AreaField/AreaField';
import SelectField from '../SelectField/SelectField';
import TextField from '../TextField/TextField';
import { GENRES } from '../../constants/data.js';
import { movieType } from '../../constants/types.js';

const DEFAULT_VALUES = {
  'title': '',
  'release_date': '',
  'poster_path': '',
  'vote_average': '',
  'genres': [],
  'runtime': '',
  'overview': ''
};

const MovieForm = ({ movie, onSubmit }) => {
  const initialValues = movie || DEFAULT_VALUES;

  const validator = values => {
    const errors = {};

    for (const property in values) {
      const value = values[property];
      if (!value) {
        errors[property] = 'Required';
      }
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validator}
      onSubmit={(values, { setSubmitting }) => {
        console.log('form submitting: ' + JSON.stringify(values))
        onSubmit(values);
      }}
    >
      {({
        isSubmitting
      }) => (
        <Form noValidate>
          <Modal.Body>
            <Container>
              <Row>
                <TextField
                  type='text'
                  label='Title'
                  name='title'
                  placeholder='Enter title'
                />
                <TextField
                  type='text'
                  label='Release date'
                  name='release_date'
                  placeholder='Enter release date'
                />
              </Row>
              <Row>
                <TextField
                  type='text'
                  label='Movie URL'
                  name='poster_path'
                  placeholder='https://'
                />
                <TextField
                  type='number'
                  label='Rating'
                  name='vote_average'
                  placeholder='7.8'
                />
              </Row>
              <Row>
                <SelectField
                  name='genres'
                  label='Genre'
                  placeholder='Select Genre'
                  options={GENRES}
                />
                <TextField
                  type='number'
                  label='Runtime'
                  name='runtime'
                  placeholder='minutes'
                />
              </Row>
              <Row>
                <AreaField
                  label='Overview'
                  name='overview'
                  placeholder='Movie description'
                />
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' type='reset'>
              Reset
            </Button>
            <Button variant='primary' type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      )}
    </Formik>
  );
}

MovieForm.propTypes = {
  movie: movieType,
  onSubmit: PropTypes.func.isRequired
};

export default MovieForm;
