/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Register
 */

import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm, Form, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

import { actionsRegister } from '../../store/ducks/register';

import CustomCard from '../../components/CustomCard';
import CustomInput from '../../components/CustomInput';

const Register = ({ handleSubmit }) => {
  const dispatch = useDispatch();
    const handleSave = values => {
        dispatch(actionsRegister.register(values))
    };
    return (
      <CustomCard title="Novo usuário - Chat">
        <Form onSubmit={handleSubmit(v => handleSave(v))}>
          <Field name="firstName" type="text" labelText="First Name" component={CustomInput} />
          <Field name="lastName" type="text" labelText="Last Name" component={CustomInput} />
          <Field name="email" type="email" labelText="Email" component={CustomInput} />
          <Field name="password" type="password" labelText="Password" component={CustomInput} />

          <Link to='/'>
            <Button type="button" color="danger">
                            Voltar
            </Button> 
          </Link>
          <Button type="submit" color="success">
                        Cadastrar
          </Button>
        </Form>
      </CustomCard>
    );
};

Register.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'register',
})(Register);
