
import * as React from 'react';
import { useState,useEffect } from 'react';
import axios,{AxiosResponse} from 'axios';
import WeathrInfo from './WeatherInfo';
import { weatherResponse } from '../Models/models';


interface ISearchBoxProps {
}



interface error {
   
}
const SearchBox: React.FunctionComponent<ISearchBoxProps> = (props) => {

    const [city, setCity] = useState("dehli")
    const [weatherData,setData] = useState<weatherResponse>()



    const getWeatherData = (city:string) => {
        axios({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e203317f0df5474c05874e35b030eda3`
        //   url:'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=0161aec51f8daa9816eae545f74ee231'
        })
          .then((response: AxiosResponse<weatherResponse>) => {
            
            console.log(response);
            setData(response.data);
          })
          .catch((error:error) => {console.log(error)});
      };

       
      useEffect(()=>{
        getWeatherData(city);
      },[])
    


  return (
   <div className="searchBox">
    <form id="content" autoComplete="off">
          <input
            type="text"
            name="input"
            className="Search-box"
            onChange={(e) => setCity(e.target.value)}
          />
          <span></span>
        </form>
        <button
          className="searchbtn"
          onClick={() => {
            getWeatherData(city);
          }}
        >
          Search
        </button>
        <WeathrInfo data={weatherData}/>
   </div>
  );
};

export default SearchBox;
