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
      <div className='contenitore'>
        {actresses.map(actresses =>
          <div key={actresses.id}>
            <h3> Name : {actresses.name}</h3>
            <p>Birth Date : {actresses.birth_year}</p>
            <p>Nationality : {actresses.nationality}</p>
            <p>Biography : {actresses.biography}</p>
            <p>Awards: {actresses.awards}</p>
            <img src={actresses.image} alt={actresses.name} />
          </div>


        )}
      </div>

    </>
  )
}

export default App
