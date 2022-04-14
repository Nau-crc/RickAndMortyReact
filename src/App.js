import logo from './logo.svg';
import './App.css';
import imageRickMorty from './img/rick-morty.png';
import { useState } from 'react';
import Characters from './components/Characters'

function App() {


  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const api =  await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

  setCharacters(characterApi.results);
  };
  console.log(characters);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>

        ) :(
          <>
            <img src={imageRickMorty} atl="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">
              BuscarPersonajes
            </button>
          </>
        )}
        
      </header>
    
    </div>
  );
}

export default App;
