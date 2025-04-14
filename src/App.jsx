import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/card';

function App() {

  const [actresses, setActresses] = useState([]);
  const [actor, setActor] = useState([]);

  //inserire www !!!!!

  const endpoint = "https://www.freetestapi.com/api/v1/actresses";
  const endpointMale = "https://www.freetestapi.com/api/v1/actors";



  const fetchActresses = () => {
    axios.get(endpoint)
      .then(response => {
        setActresses(response.data);
      })
  }

  const fetchActor = () => {
    axios.get(endpointMale)
      .then(response => {
        setActor(response.data);
      })
  }

  useEffect(() => {
    fetchActresses();
    fetchActor();
  }, []);

  console.log(actresses)


  return (
    <>
      <h2>Attrici</h2>
      <hr />
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

      <hr />

      <h2>Attori</h2>
      <hr />

      <div className='card-container'>
        {actor.map(actor =>
          <Card key={actor.id}>
            <h2> Name : {actor.name}</h2>
            <p>Birth Date : {actor.birth_year}</p>
            <p>Nationality : {actor.nationality}</p>
            <p>Biography : {actor.biography}</p>
            <p>Awards: {actor.awards}</p>
            <div className='card-image'>
              <img src={actor.image} alt={actor.name} />
            </div>
          </Card>
        )}
      </div>
      <hr />

    </>
  )
}

export default App
