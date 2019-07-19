/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description View Message
 */

import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Jumbotron } from 'reactstrap';

import { actionsMessage } from '../../store/ducks/message';

const style = {
    container: {
        overflowY: 'auto',
        height: '450px',
        width: '100%'
    }
}

const ViewMessage = () => {
    const messages = useSelector(state => state.message.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionsMessage.listMessage());
    }, []);

    return (
      <Jumbotron style={style.container}>
        <ul>{messages.length ?  messages.map(v => (
          <li
            key={v.id}
            style={{
              paddingBottom: '10px',
              display: 'block',
              clear: 'both',
              float: v.side === 'right' ? 'right' : 'left' 
            }}  
          >{v.message}
          </li>
        )) : (
          <p> Nenhuma conversa no momento </p>
        )}
        </ul>
      </Jumbotron>
    );
};

export default ViewMessage;
