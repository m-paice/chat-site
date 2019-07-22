/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Perfil
 */

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { actionsLogin } from '../../store/ducks/login';

import AddUser from './AddUser';

import avatar from '../../assets/img/avatar.svg';

const style = {
    logout: {
        position: 'absolute',
        right: '0px',
        cursor: 'pointer',
        color: '#212529',
    },
    addUser: {
        cursor: 'pointer',
    },
};

const Perfil = () => {
    const dispacth = useDispatch();
    const userOn = useSelector(state => state.login.user);

    const [modal, setModal] = useState(false);

    const handleLogout = () => {
        dispacth(actionsLogin.logout());
    };

    const handleAddUser = () => setModal(!modal);

    return (
      <>
        <Row>
          <Col>
            <img src={avatar} width="45px" height="45px" alt="" /> {userOn.firstName}
          </Col>
          <Col>
            <FontAwesomeIcon icon={faUserPlus} onClick={handleAddUser} style={style.addUser} />
            <Link to="/" style={style.logout} onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
            </Link>
          </Col>
        </Row>
        {modal && <AddUser modal={modal} setModal={setModal} />}
      </>
    );
};

export default Perfil;
