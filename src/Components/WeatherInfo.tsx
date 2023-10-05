import * as React from 'react';
import { weatherResponse } from '../Models/models';
import { useState } from 'react';

interface IWeathrInfoProps {
    data?: weatherResponse
   
}

const WeathrInfo: React.FunctionComponent<IWeathrInfoProps> = ({data}) => {

    const [unit,setUnit] = useState(false)

    let temp = data?.main.temp;
    // if(temp)temp = temp-273

   
  return (
   
       <div id="card" className="weather">
          <div className="details">
            <div className="temp">
              {temp&& Math.trunc(temp-273)}
              <span>&deg;</span>
            </div>
            <div className="right">
              <div id="summary">{data?.weather[0].description}</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>{data?.name}</div>
            </div>
          </div>
          <img className="weatherimg" alt="image1" src={`${data?.weather[0].icon}.svg`} /> 
          <div className="infos">
            <img
              alt="humidity1"
              className="humidityimg"
              style={{ width: "5", height: "5" }}
              src="humidity.svg"
            ></img>
            <div className="humidity">Humidity {data?.main.humidity}</div>
            <img
              alt="visibility1"
              className="visibilityimg"
              style={{ width: "5", height: "5" }}
              src="visibility.svg"
            ></img>
            <div className="visibility">Visibility {data?.visibility && <>{data.visibility / 1000}</>} km
</div>
            <img
              alt="windspeed1"
              className="windimg"
              style={{ width: "5", height: "5" }}
              src="wind.svg"
            ></img>
            <div className="windspeed">Wind Speed {data?.wind.speed} km</div>
          </div>
        </div>
     
  );
};

export default WeathrInfo;
