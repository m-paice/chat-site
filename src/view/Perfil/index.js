/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Perfil
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { actionsLogin } from '../../store/ducks/login';

import avatar from '../../assets/img/avatar.svg';

const Perfil = () => {
  const dispacth = useDispatch();
  const userOn = useSelector(state => state.login.user);

  const handleLogout = () => {
    dispacth(actionsLogin.logout())
  }

    return (
      <Row>
        <Col><img src={avatar} width="45px" height="45px" alt="" /> {userOn.firstName}</Col>
        <Col> 
          <Link to='/' style={{ position: 'absolute', right: '0px', cursor: 'pointer', color: 'black' }} onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} size='lg' /> 
          </Link>
        </Col>
      </Row>
    );
};

export default Perfil;
