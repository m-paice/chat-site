/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Add User
 */

import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import { actionsUser } from '../../store/ducks/user';
import { actionsContact } from '../../store/ducks/contact';

const style = {
    span: {
        float: 'right',
        cursor: 'pointer',
    },
    body: {
        height: '300px',
        overflowY: 'auto',
    },
};

const AddUser = ({ modal, setModal }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.data);
    const contacts = useSelector(state => state.contact.data);

    useEffect(() => {
        dispatch(actionsUser.listUser());
    }, []);

    const addUser = id => {
        dispatch(actionsContact.addContact(id));
    };

    const compare = (arrUser, arrContact) => {
        const final = [];

        if (arrUser.length !== 0 && arrContact.length !== 0) {
            arrUser.forEach(user => {
                arrContact.forEach(contact => {
                    if (user.id === contact.id) {
                        return final.push({ ok: true, ...user });
                    }
                    return final.push({ ok: false, ...user });
                });
            });

            return final;
        }

        return arrUser;
    };

    const arrFiltered = compare(users, contacts);

    return (
      <div>
        <Modal isOpen={modal}>
          <ModalHeader> Lista de usuários </ModalHeader>
          <ModalBody style={style.body}>
            <ListGroup>
              {arrFiltered &&
                            arrFiltered.map(v => {
                                if (v.ok) {
                                    return <ListGroupItem key={v.id}>{`${v.firstName} ${v.lastName}`}</ListGroupItem>;
                                }

                                return (
                                  <ListGroupItem key={v.id} onClick={() => addUser(v.id)}>
                                    {`${v.firstName} ${v.lastName}`}
                                    <span style={style.span}>
                                      <FontAwesomeIcon icon={faPlus} />
                                    </span>
                                  </ListGroupItem>
                                );
                            })}
              {console.log(compare(users, contacts))}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setModal(!modal)}>
                        Fechar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
};

AddUser.propTypes = {
    modal: PropTypes.bool.isRequired,
    setModal: PropTypes.func.isRequired,
};

export default AddUser;
