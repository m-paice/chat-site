/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Search User
 */

import React from 'react';

import { useDispatch } from 'react-redux';

import { reduxForm, Form, Field } from 'redux-form';

import { Button, Row, Col } from 'reactstrap';

import { actionsSearch } from '../../../store/ducks/search';

import CustomInput from '../../../components/CustomInput';

const style = {
    buttom: {
        position: 'absolute',
        top: '23px',
        right: '1px',
    },
};

const SearchUser = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    const handleSave = values => {
        dispatch(actionsSearch.search(values));
    };

    return (
      <Form onSubmit={handleSubmit(v => handleSave(v))}>
        <Row>
          <Col xs="10" md="10" sm="10">
            <Field name="search" component={CustomInput} />
          </Col>
          <Col xs="2" md="2" sm="2">
            <Button color="success" type="submit" style={style.buttom}>
                        Add
            </Button>
          </Col>
        </Row>
      </Form>
    );
};

export default reduxForm({
    form: 'searchUser',
})(SearchUser);
