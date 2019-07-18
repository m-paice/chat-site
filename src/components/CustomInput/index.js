/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Input
 */

import React from 'react';

import PropTypes from 'prop-types';

import { FormGroup, Label, Input } from 'reactstrap';

const CustomInput = ({ type, labelText, input }) => {
    const { onChange, value } = input;
    return (
      <FormGroup>
        <Label>{labelText}</Label>
        <Input type={type} onChange={onChange} value={value} />
      </FormGroup>
    );
};

CustomInput.propTypes = {
    type: PropTypes.string,
    labelText: PropTypes.string,
    input: PropTypes.object,
};

export default CustomInput;
