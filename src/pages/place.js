import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Axios from 'axios';

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edec7f1a9d3bfc829349a89291ef69bf`);
      setData(response.data);
    } catch (err) {
      alert("Enter City Name ");
    }
  };

  return (
    <div>
      <Navbar />
      <h1>weather check using api</h1>
      <form>
        Enter City Name :
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter City Name'
        />
      </form>

      <button onClick={fetchData}>GET WEATHER</button>
      
      {data && (
        <div>
          <h1>{data.name}, {data.sys.country}</h1>
          <div>{Math.round(data.main?.temp)} C</div>
          <div>Lat - {data.coord?.lat}</div>
          <div>Lon - {data.coord?.lon}</div>
        </div>
      )}
    </div>
  );
};

export default App;
 