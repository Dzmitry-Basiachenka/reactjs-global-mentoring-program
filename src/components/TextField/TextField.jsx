import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { Col } from 'react-bootstrap';

const TextField = ({
    type,
    label,
    name,
    placeholder
}) => {
    return (
        <Col>
            <label className='form-label'>{label}</label>
            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                className='form-control'
            />
            <ErrorMessage name={name} component='div' />
        </Col>
    )
}

TextField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextField;
