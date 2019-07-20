/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description View Message
 */

import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import moment from 'moment';

import { actionsMessage } from '../../store/ducks/message';

const style = {
    container: {
        overflowY: 'auto',
        height: '450px',
        width: '100%',
    },
    span: {
        fontSize: '13px',
        color: '#A9A9A9	',
    },
};

const ViewMessage = () => {
    const messages = useSelector(state => state.message.data);
    const dispatch = useDispatch();

    useEffect(() => {
        const objDiv = document.getElementById('scroll');
        objDiv.scrollTop = objDiv.scrollHeight;
    });

    useEffect(() => {
        dispatch(actionsMessage.listMessage());
    }, []);

    return (
      <Jumbotron style={style.container} id="scroll">
        <ul>
          {messages.length !== 0 ? (
                    messages.map(v => (
                      <li
                        key={v.data.id}
                        style={{
                                paddingBottom: '10px',
                                display: 'block',
                                clear: 'both',
                                float: v.side && v.side === 'send' ? 'right' : 'left',
                            }}
                      >
                        <p> {v.data.message} </p>
                        <div>
                          <span style={style.span}> {moment(v.data.createdAt).format('h:mm a')} </span>
                        </div>
                      </li>
                    ))
                ) : (
                  <p> Nenhuma conversa no momento </p>
                )}
        </ul>
      </Jumbotron>
    );
};

export default ViewMessage;
