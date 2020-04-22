import React from 'react';
import PropTypes from 'prop-types';

import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';

// import { SUN } from '../../../constants/weathers';
import './styles.css';

const weatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={temperature}
            weatherState={weatherState}
        />

        <WeatherExtraInfo
            humidity={humidity}
            wind={wind}
        />
    </div>
);

weatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default weatherData;