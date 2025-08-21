import "./App.css";
import React, { useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import SongItem from "./components/SongItem";
import Sidebar from "./components/Sidebar";

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch("https://api.deezer.com/search?q=cat")
      .then((res) => res.json())
      .then((data) => setSongs(data.data)) // Deezer devuelve un array en "data"
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <PlayerCard />
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Popular</h3>
          <div>
            <h2>Canciones populares</h2>
            <ul>
              {songs.map((song) => (
                <li key={song.id}>
                  {song.title} - {song.artist.name}
                </li>
              ))}
            </ul>
          </div>
          {/*       <SongItem
            title="Atrápalos Ya!"
            artist="Pokémon"
            image="/assets/pokemon.jpg"
          />
          <SongItem
            title="Cazzu con Catch me"
            artist="Cazzu"
            image="/assets/cazzu.jpg"
          /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
