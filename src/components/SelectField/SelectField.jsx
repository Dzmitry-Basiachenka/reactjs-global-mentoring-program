import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { Col } from 'react-bootstrap';

const SelectField = ({
    label,
    name,
    placeholder,
    options
}) => {
    return (
        <Col>
            <label className='form-label'>{label}</label>
            <Field
                as='select'
                name={name}
                multiple={true}
                className='form-control'>
                <option>{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Field>
            <ErrorMessage name={name} component='div' />
        </Col>
    )
}

SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string)
};

export default SelectField;
