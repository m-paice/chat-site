/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Input
 */

import React from 'react';

import PropTypes from 'prop-types';

import { Input } from 'reactstrap';

const NewInput = ({ type, input, placeholder }) => {
    const { onChange, value } = input;
    return (<Input type={type} onChange={onChange} value={value} placeholder={placeholder} />)
  
};

NewInput.propTypes = {
    type: PropTypes.string,
    labelText: PropTypes.string,
    input: PropTypes.object,
    placeholder: PropTypes.string
};

export default NewInput;
