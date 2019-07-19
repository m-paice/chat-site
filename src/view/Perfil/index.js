/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Perfil
 */

import React from 'react';

import { useSelector } from 'react-redux';
import avatar from '../../assets/img/avatar.svg';


const Perfil = () => {

  const userOn = useSelector(state => state.login.user);

    return (
      <div>
        <img src={avatar} width="45px" height="45px" alt="" /> {userOn.firstName}
      </div>
    );
};

export default Perfil;
