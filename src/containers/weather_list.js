import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableRow from '../components/table-row';

import '../style/weatherList.css';

class WeatherList extends Component {
  render(){
    return(
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              City
            </th>
            <th scope="col">
              Five Day Forecast (&deg;F)
            </th>
            <th scope="col">
              Pressure (hPa)
            </th>
            <th scope="col">
              Humidity (&#37;)
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map((cityData) => {
            return(
              <TableRow key={cityData.city.name} cityData={cityData} />
            )
          })}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
