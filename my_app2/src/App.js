import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { dataDND } from './utility/data';
import HeroList from './components/hero_list';
import "react-sweet-progress/lib/style.css";

function App() {
  const [hero,setHero]= useState([]);

  useEffect(()=>{
    setHero(dataDND);
  },[]);
  return (
    <HeroList data={hero}/>
  )
}

export default App;
