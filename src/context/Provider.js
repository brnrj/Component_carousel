import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  let [index, setIndex] = useState(0)
  let [value, setValue] = useState(0)
  function changeImage() {
    if(index > pokemon.length -1){
      index = 0
    }else if(index < 0) {
      index = pokemon.length -1
    }
    setValue(`${-index * 360}`)
  }

  function handleRight(){
    setIndex(index + 1)
    changeImage()
  }

  function handleLeft(){
    setIndex(index - 1)
    changeImage()
  }

  useEffect(() => {
      fetch('https://api.pokemontcg.io/v1/cards?name=pikachu')
      .then((response) => response.json())
      .then((result) => setPokemon(result.cards));
  }, []);

  const context = {pokemon, handleLeft, handleRight, value};
  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;
