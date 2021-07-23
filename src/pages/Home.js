import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';

const Home = () => (
  <Grid fuild className="h-100">
    <Row>
      <Col xs={24} md={8}>
        <Sidebar />
      </Col>
    </Row>
  </Grid>
);
export default Home;
