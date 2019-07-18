/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description List of User
 */

import React from 'react';

import { useSelector } from 'react-redux';

const ListOfUser = () => {
    const users = useSelector(state => state.user.data);
    return <ul>{users && users.map(v => <li key={v.id}> {v.firstName} </li>)}</ul>;
};

export default ListOfUser;
