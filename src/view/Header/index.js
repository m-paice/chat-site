/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description Header
*/

import React from "react";

import { useSelector } from 'react-redux';

import avatar from '../../assets/img/avatar.svg';

const Header = () => {

  const userTalk = useSelector(state => state.talk.data);

  return (
    <div style={{ padding: '10px' }}> 
      <img src={avatar} width='45px' height='45px' alt='' /> {userTalk.firstName}
    </div>
);
};

export default Header;