import React from 'react'
import Pm1 from "./graphs/Pm1"
import Pm25 from "./graphs/Pm25";
import Pm10 from "./graphs/Pm10";



const Dashboard = ({data}) => {
    return (
      <>
        <Pm1 {...data} />
        <Pm25 {...data} />
        <Pm10 {...data} />
      </>
    );
}

export default Dashboard;
