import './App.css';
import { useState } from 'react';

function App() {
  const [datas, setDatas] = useState({});
  const [location, setLocation] = useState('');
  const [far, setFar] = useState({});

  const apiKey =  import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const temUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const handlesearch = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDatas(data));

    fetch(temUrl)
      .then((res) => res.json())
      .then((datas) => setFar(datas));
  }

  console.log(datas, far);

  return (
    <div>
      <input
        type="text"
        name="location"
        id=""
        placeholder='location'
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button onClick={handlesearch}>Search</button>
      <div>
        <p>Data from Metric Units API: {datas?.main?.temp}°C</p>
        <p>Data from Imperial Units API: {far?.main?.temp}°F</p>
      </div>
    </div>
  );
}

export default App;
