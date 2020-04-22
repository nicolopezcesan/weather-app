import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/locationList';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setCity, cities, city } = this.props;

        setWeather(cities);
        setCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
    }


    render() {
        const { citiesWeather } = this.props;

        return (
            <LocationList
                cities={citiesWeather}
                onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});


const mapStateToProps = state => ({ 
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});


export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);