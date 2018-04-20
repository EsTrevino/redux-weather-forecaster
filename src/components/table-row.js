import React from 'react';
import Graph from './graph';
import GoogleMap from '../components/google_map';

const TableRow = ({cityData}) => {
  const tempObject = [];
  const pressureObject = [];
  const humidityObject = [];
  const tempArray = [];
  const humidityArray = [];
  const pressureArray = [];
  const getAverage = (array) =>{
    let sum = array.reduce((a, b) => a + b, 0);
    return Math.floor(sum /array.length);
  }
  const listMapper = () =>{
    cityData.list.map(({main}) =>{
      let tempInFarenheight = Math.floor(((main.temp - 273.15) * 1.8 + 32));
      let pressure = Math.floor(main.pressure);
      //chart node module only accepts data as array of objects
      //need to convert all list items into objects so we can
      //feed them to their individual graph components
      let individualTempObject = {name: '', uv: tempInFarenheight, amt: tempInFarenheight}
      let individualPressureObject = {name: '', uv: pressure, amt: pressure}
      let individualHumidityObject = {name: '', uv: main.humidity, amt: main.humidity}
      tempObject.push(individualTempObject);
      pressureObject.push(individualPressureObject);
      humidityObject.push(individualHumidityObject);
      tempArray.push(tempInFarenheight);
      humidityArray.push(main.humidity);
      pressureArray.push(pressure);
    })
  }
    return(
      <tr key={cityData.city.name}>
        <td className="city-name" >
            <GoogleMap lat={cityData.city.coord.lat} long={cityData.city.coord.lon} />
        </td>
        {listMapper()}
        <td className="graph-container">
          <Graph dataObject={tempObject}  />
          Avg: {getAverage(tempArray)} &deg;F
        </td>
        <td className="graph-container">
          <Graph dataObject={pressureObject}  />
          Avg: {getAverage(pressureArray)} hPa
        </td>
        <td className="graph-container">
          <Graph dataObject={humidityObject}  />
          Avg: {getAverage(humidityArray)}&#37;
        </td>
      </tr>
  )
}

export default TableRow;
