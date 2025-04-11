import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/card';

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
      <div className='card-container'>
        {actresses.map(actresses =>
          <Card key={actresses.id}>
            <h2> Name : {actresses.name}</h2>
            <p>Birth Date : {actresses.birth_year}</p>
            <p>Nationality : {actresses.nationality}</p>
            <p>Biography : {actresses.biography}</p>
            <p>Awards: {actresses.awards}</p>
            <div className='card-image'>
              <img src={actresses.image} alt={actresses.name} />
            </div>
          </Card>


        )}
      </div>

    </>
  )
}

export default App
