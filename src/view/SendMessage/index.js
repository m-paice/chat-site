/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Send Message
 */

import React from 'react';

import PropTypes from 'prop-types';
import { reduxForm, Form, Field } from 'redux-form';
import { Button, InputGroup, InputGroupAddon} from 'reactstrap';
import { useDispatch } from 'react-redux';

import { actionsMessage } from '../../store/ducks/message';

import NewInput from '../../components/NewInput';

const style = {
    buttom: {
        position: 'absolute',
        top: '23px',
        right: '15px',
    },
};

const SendMessage = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    const handleSave = values => {
        dispatch(actionsMessage.message(values));
    };

    return (
      <Form onSubmit={handleSubmit(v => handleSave(v))}>
        <InputGroup>
          <Field name='message' component={NewInput} />
          <InputGroupAddon addonType="append">
            <Button color="success"> Send </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
};

SendMessage.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'message',
})(SendMessage);
