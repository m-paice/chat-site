/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description User
 */

import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import { addUser } from '../action/user';

const Input = ({ label, input }) => (
  <div>
    <h4> {label} </h4>
    <input value={input.value} onChange={input.onChange} />
  </div>
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.objectOf.isRequired,
};

class User extends React.Component {
    handleSubmit = values => {
        const { addUser, initialize } = this.props;
        addUser(values);

        initialize({
            nome: '',
            email: '',
        });
    };

    render() {
        const { handleSubmit, users } = this.props;

        return (
          <div>
            <Form onSubmit={handleSubmit(v => this.handleSubmit(v))}>
              <Field name="nome" label="Nome" type="text" component={Input} />
              <Field name="email" label="E-mail" type="text" component={Input} />

              <button type="submit"> Novo </button>
            </Form>

            {users && users.length !== 0 ? (
                    users.map(v => (
                      <div key={v.nome}>
                        {v.nome} - {v.email}
                      </div>
                    ))
                ) : (
                  <p> Nenhum usuário </p>
                )}
          </div>
        );
    }
}

User.propTypes = {
    users: PropTypes.array.isRequired,
    addUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
    addUser: values => dispatch(addUser(values)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'newUSer',
    })(User),
);
