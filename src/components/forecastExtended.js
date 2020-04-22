import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecastItem';

import './styles.css';

// funciones de apoyo al renderizado
const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekday={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>
    ));
}

// funciones de apoyo al renderizado
const renderProgress = () => {
    return <h3>Cargando pronóstico extendido..</h3>;
}


const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>Pronóstico extendido para: {city}</h2>

        { forecastData ? renderForecastItemDays(forecastData) : renderProgress() }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

export default ForecastExtended;