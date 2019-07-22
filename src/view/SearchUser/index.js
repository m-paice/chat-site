/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Search User
 */

import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import { Button, InputGroup, InputGroupAddon } from 'reactstrap';

import { actionsSearch } from '../../store/ducks/search';

import NewInput from '../../components/NewInput';

const SearchUser = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    const handleSave = values => {
        dispatch(actionsSearch.search(values));
    };

    return (
      <Form onSubmit={handleSubmit(v => handleSave(v))}>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <Button color="success"> Search </Button>
          </InputGroupAddon>
          <Field name='search' component={NewInput} />
        </InputGroup>
      </Form>
    );
};

SearchUser.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'searchUser',
})(SearchUser);
