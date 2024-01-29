import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}
let data = imageData();
import React from 'react'

const App = () => {
  return (
    <div>
      <center>
    <h1>Kalvium gallery</h1>
    <div>
      {data.map((item) => {
        return <img src={item.img} alt=""/>;
      })}
      </div>
      </center>
    </div>
  )
}

export default App
