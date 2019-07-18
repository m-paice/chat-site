/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Custom Card
 */

import React from 'react';

import PropTypes from 'prop-types';

import { Container, Card, CardHeader, CardBody } from 'reactstrap';

const CustomCard = ({ children, title }) => {
    return (
      <Container style={{ marginTop: '70px', marginBottom: '70px' }}>
        <Card>
          <CardHeader> {title} </CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </Container>
    );
};

CustomCard.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
};

export default CustomCard;
