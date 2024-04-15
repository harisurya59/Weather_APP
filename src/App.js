import { useState } from "react";
import axios from "axios";

function App(){

  const[city,setcity] = useState("")

  const [weather,setweather] = useState("")
  const [temperature,settemperature] = useState("")
  const [description,setdescription] = useState("")
 


  function handlecity(evt){
    setcity(evt.target.value)
  }

  function getweather(){
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acef7f03135f3abca4fc809145033a6e`)
    weatherdata.then(function(success){
      console.log(success.data)
      setweather(success.data.weather[0].main)
      setdescription(success.data.weather[0].description)
      settemperature(success.data.main.temp)
    })
  }

  return (
    <div className="bg-black p-20">
      <div className="bg-green-400 rounded-md p-10 ">
       <h1 className="font-medium text-2xl">Weather Report</h1>
       <p>I can give you a weather report about your city !</p>
       <input onChange={handlecity} type="text" placeholder="Enter your name" className=" border-black rounded-md p-1 my-2"></input> <br></br>
       <button onClick={getweather} className="bg-black text-white p-1 rounded-md">Get Report</button>

       <div className="font-medium">
            <p>Weather: {weather}</p>
            <p>Temperature: {temperature}</p>
            <p>Description: {description}</p>
       </div>
      </div>
    </div>
  )
}

export default App;
