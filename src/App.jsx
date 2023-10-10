import './App.css';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function App() {
  const [datas, setDatas] = useState({});
  const [location, setLocation] = useState('');
  const [far, setFar] = useState({});
  const [show, setShow] = useState(false)

  
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
  const temUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`;

  const handlesearch = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDatas(data));

    fetch(temUrl)
      .then((res) => res.json())
      .then((datas) => setFar(datas));
  }

 

  return (
    <div className='flex justify-center lg:mt-24  lg:p-'>

       <div  className='w-72 h-96 rounded-lg bg-slate-200 p-4'>

        <div className='flex justify-center mt-2'>
          <input
          className='border-white-1 rounded-full text-center text-black font-semibold'
        type="text"
        name="location"
        id=""
        placeholder='location'
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
        <button className="btn btn-xs rounded-full ml-1" onClick={handlesearch}> <AiOutlineSearch/></button>
        </div>
        
        <div>
          <div>
          <div className="form-control mt-3 mr-3">
            <label className="label cursor-pointer">
              <span className="label-text"></span>
              <input type="checkbox" className="toggle ml-3" checked={show} onChange={()=> setShow(!show)} />
              </label>
              </div>
          </div>
          <div className='text-center'>
  {show ? (
    far?.main?.temp  ? (
      <div className='my-10'>
                  <p className='text-3xl font-bold'>{far.main.temp}°F</p>
                  <h4 className='text-4xl font-bold'>{far.name}</h4>
      </div>
    ) : (
      <p className='text-xl font-bold my-10'>Search City Name</p>
    )
  ) : (
    datas?.main?.temp  ? (
      <div className='my-10'>
                    <p  className='text-3xl font-bold'>{datas?.main?.temp}°C</p>
                    <h4  className='text-4xl font-bold'>{datas.name}</h4>
      </div>
    ) : (
      <p className='text-xl font-bold my-10'>Search City Name</p>
    )
  )}
</div>

</div>
        
        
      </div>
    </div>
  
  );
}

export default App;
