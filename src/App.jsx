import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [actresses, setActresses] = useState([]);

  //inserire www !!!!!

  const endpoint = "https://www.freetestapi.com/api/v1/actresses";



  const fetchActresses = () => {
    axios.get(endpoint)
      .then(response => {
        setActresses(response.data);
      })
  }

  useEffect(fetchActresses, []);

  console.log(actresses)


  return (
    <>

    </>
  )
}

export default App
