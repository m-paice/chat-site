/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Login
 */

import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm, Form, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

import { actionsLogin } from '../../store/ducks/login'

import CustomInput from '../../components/CustomInput';
import CustomCard from '../../components/CustomCard';

const Login = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    const handleSave = values => {
        dispatch(actionsLogin.login(values))
    };
    return (
      <CustomCard title="Login - Chat">
        <Form onSubmit={handleSubmit(v => handleSave(v))}>
          <Field name="email" type="email" labelText='Email' component={CustomInput} />
          <Field name="password" type="password" labelText='Password' component={CustomInput} />

          <Link to="/register">
            <Button type="button" color='info'> Cadastrar </Button>
          </Link>
          <Button type="submit" color='success'> Entrar </Button>
        </Form>
      </CustomCard>
    );
};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'login',
})(Login);
