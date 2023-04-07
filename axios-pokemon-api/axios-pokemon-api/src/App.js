import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807");
    setPokemon(response.data.results.map((p) => p.name));
  };

  return (
    <div style={{ width: '25rem' }} className="container mt-5 text-center bg-dark">
      <div className="card-body bg-warning">
        <button className="btn btn-dark text-light" onClick={fetchPokemon}>Fetch Pokemon</button> <hr/>
        {pokemon.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
