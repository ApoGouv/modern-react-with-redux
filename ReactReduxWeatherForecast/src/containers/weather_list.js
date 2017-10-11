/**
 * File    : weather_list.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 11/10/2017
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

  /**
   * renders a single row
   * @param cityData
   * @returns {XML}
   */
  renderWeather(cityData) {
    const name = cityData.city.name;
    // array of temperatures for 5 days for a given city
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressures} color="green" /></td>
        <td><Chart data={humidities} color="black" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  };
}


function mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);