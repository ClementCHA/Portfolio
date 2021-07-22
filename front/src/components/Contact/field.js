import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContactField = ({
  type,
  id,

  placeholder,
}) => (

  <input
    className="input"
    type={type}
    id={id}
    placeholder={placeholder}
    required
  />
);

ContactField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ContactField;
