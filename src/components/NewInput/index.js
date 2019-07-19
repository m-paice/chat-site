/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Input
 */

import React from 'react';

import PropTypes from 'prop-types';

import { Input } from 'reactstrap';

const CustomInput = ({ type, input }) => {
    const { onChange, value } = input;
    return (<Input type={type} onChange={onChange} value={value} />)
  
};

CustomInput.propTypes = {
    type: PropTypes.string,
    labelText: PropTypes.string,
    input: PropTypes.object,
};

export default CustomInput;
