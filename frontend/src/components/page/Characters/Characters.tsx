import Navbar from '../../Navbar/Navbar'
import Character from './Character'
import './characters.css'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {api_url} from '../../../services/backendservice'
import legolas from '../../../img/characters/legolas.svg'
import frodo from '../../../img/characters/frodo.svg'
import galadriel from '../../../img/characters/galadriel.svg'
import gandalf from '../../../img/characters/gandalf.svg'
import CharacterButton from './CharacterButton';


function Characters() {

  const [characters, setCharacters] = React.useState({
    "docs": [
      {
          "_id": "",
          "height": "",
          "race": "",
          "gender": "",
          "birth": "",
          "spouse": "",
          "death": "",
          "realm": "",
          "hair": "",
          "name": "",
          "wikiUrl": ""
      }
  ],
  "total": 1,
  "limit": 1,
  "offset": 0,
  "page": 1,
  "pages": 1
  });

  var theOneAPIHeaders = {
    "Content-Type": "application/json",
      mode: "no-cors",
     "Access-Control-Allow-Origin": "*",
     Authorization: `Bearer J3GmG4fs5zMd_T9FocBl`,
           };


  const getCharacter = (api_url:string, character:string) => {
    axios.get(api_url + character, {headers: theOneAPIHeaders})
    .then(response => {
      setCharacters(response.data)
    })
    .catch(error => {
      return(console.log(error))
    })
  }

  useEffect(() => {
    getCharacter(api_url, "Gandalf")
  },[])
  
  useEffect(() => {
    console.log(characters)
  },[])


  return (
    <div>
        <Navbar/>
        <div className="characterContent">
          <h1>The world of middle earth!</h1>
          <p>Here's some cool characters</p>
          Info About Characters, using The One API
          
          <CharacterButton image={"gandalf"}></CharacterButton>

         <img src={legolas} className="icon" style={{"width":"100px"}} onClick={() => getCharacter(api_url, "Legolas")}></img>
         <img src={frodo} className="icon" style={{"width":"100px"}} onClick={() => getCharacter(api_url, "Frodo Baggins")}></img>
         <img src={gandalf} className="icon" style={{"width":"100px"}} onClick={() => getCharacter(api_url, "Gandalf")}></img>

         <h1>Name:</h1>
          <Character name={characters.docs[0].name}/>
        
        </div>
        </div>
  )
}

export default Characters