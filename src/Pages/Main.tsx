

import * as React from 'react';
import SearchBox from '../Components/SearchBox';

interface props {
}

const Main: React.FunctionComponent<props> = (props) => {
  return (
   <div >
    <h1 style={{marginLeft:"4rem"}}>Weather App</h1>
    <SearchBox/>
    
   </div>
  );
};

export default Main;
