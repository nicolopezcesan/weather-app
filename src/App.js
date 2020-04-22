import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/locationListContainer';

import ForecastExtendedContainer from './containers/forecastExtendedContainer';

import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Washington, us',
  'Bogota, col',
  'Ciudad de Mexico, mx',
  'Madrid, es',
  'Lima, pe'
];


class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h4' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          {/* componente de la izquierda */}
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

// Nueva forma de generar funciones
// const myFunct = param => `${param} ESTO! :)`;
// console.log(myFunct('Mi funcion retorna: '));


export default App;