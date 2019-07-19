/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Layout
 */

import React from 'react';

import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import ListOfUser from '../ListOfUsers';
import SearchUser from '../SearchUser';
import ViewMessage from '../ViewMessage';
import SendMessage from '../SendMessage';
import Header from '../Header';
import Perfil from '../Perfil';

const style = {
    default: {
        marginTop: '25px',
        marginBottom: '25px',
    },
};

const Layout = () => {
    const talk = useSelector(state => state.talk.talk);

    return (
      <Container style={style.default}>
        <Row>
          <Col xs="12" md="4" sm="4">
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
              <Col>
                <Perfil />
              </Col>
            </Row>
            <Row>
              <Col>
                <SearchUser />
              </Col>
            </Row>
            <Row
              style={{
                            marginTop: '50px',
                        }}
            >
              <Col>
                <ListOfUser />
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="8" sm="8">
            {talk ? (
              <div>
                <Row>
                  <Col xs="12" md="12" sm="12">
                    <Header />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="12" sm="12">
                    <ViewMessage />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="12" sm="12">
                    <SendMessage />
                  </Col>
                </Row>
              </div>
                    ) : (
                      <div
                        style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                      >
                            Bem-vindo ao chat
                      </div>
                    )}
          </Col>
        </Row>
      </Container>
    );
};

export default Layout;
