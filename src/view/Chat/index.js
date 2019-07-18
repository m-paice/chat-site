/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Chat
 */

import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Container, Row, Col } from 'reactstrap';

import { actionsUser } from '../../store/ducks/user';

import ListOfUsers from './ListOfUsers';
import SearchUser from './SearchUser';

const style = {
    default: {
        border: '1px solid',
        height: '500px',
        marginTop: '70px',
        marginBottom: '70px',
    },
    sendMessage: {
        position: 'absolute',
        bottom: '0px',
        border: '1px solid',
        width: '100%',
    },
    searchUser: {
        padding: '20px',
        height: '20%',
    },
    listOfUser: {
        paddingTop: '40px',
        overflowY: 'auto',
    },
};

const Chat = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionsUser.listUser());
    }, []);
    return (
      <Container>
        <Row style={style.default}>
          <Col xs="12" md="3" sm="3">
            <Row style={style.searchUser}>
              <SearchUser />
            </Row>
            <Row style={style.listOfUser}>
              <ListOfUsers />
            </Row>
          </Col>
          <Col xs="12" md="9" sm="9">
            <Row>Messages</Row>
            <Row style={style.sendMessage}>Send message</Row>
          </Col>
        </Row>
      </Container>
    );
};

export default Chat;
