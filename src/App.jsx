import "./App.css";
import PlayerCard from "./components/PlayerCard";
import SongItem from "./components/SongItem";
import Sidebar from "./components/Sidebar";

function App() {
  const imageAlbun =
    "https://www.whosampled.com/static/images/media/track_images_100/mr338438_2022512_3457341228.jpg";
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <PlayerCard />
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Popular</h3>
       
          <SongItem title="Moscow Mule" artist="Bad Bunny" image={imageAlbun} />
          <SongItem
            title="Después de la Playa"
            artist="Bad Bunny"
            image={imageAlbun}
          />
          <SongItem
            title="Me Porto Bonito"
            artist="Bad Bunny & Chencho Corleone"
            image={imageAlbun}
          />
          <SongItem
            title="Tití Me Preguntó"
            artist="Bad Bunny"
            image={imageAlbun}
          />
          <SongItem title="Un Ratito" artist="Bad Bunny" image={imageAlbun} />
          <SongItem
            title="Yo No Soy Celoso"
            artist="Bad Bunny"
            image={imageAlbun}
          />
          <SongItem
            title="Tarot"
            artist="Bad Bunny & Jhayco"
            image={imageAlbun}
          />
          <SongItem title="Neverita" artist="Bad Bunny" image={imageAlbun} />
          <SongItem
            title="La Corriente"
            artist="Bad Bunny & Tony Dize"
            image={imageAlbun}
          />
          <SongItem title="Efecto" artist="Bad Bunny" image={imageAlbun} />
          <SongItem
            title="Party"
            artist="Bad Bunny & Rauw Alejandro"
            image={imageAlbun}
          />
          <SongItem title="Aguacero" artist="Bad Bunny" image={imageAlbun} />
          <SongItem
            title="Enséñame a Bailar"
            artist="Bad Bunny"
            image={imageAlbun}
          />
          <SongItem
            title="Ojitos Lindos"
            artist="Bad Bunny & Bomba Estéreo"
            image={imageAlbun}
          />
          <SongItem title="Dos Mil 16" artist="Bad Bunny" image={imageAlbun} />
          <SongItem title="El Apagón" artist="Bad Bunny" image={imageAlbun} />
          <SongItem
            title="Otro Atardecer"
            artist="Bad Bunny & The Marías"
            image={imageAlbun}
          />
          <SongItem title="Un Coco" artist="Bad Bunny" image={imageAlbun} />
          <SongItem
            title="Andrea"
            artist="Bad Bunny & Buscabulla"
            image={imageAlbun}
          />
          <SongItem
            title="Me Fui de Vacaciones"
            artist="Bad Bunny"
            image={imageAlbun}
          />
          <SongItem
            title="Un Verano Sin Ti"
            artist="Bad Bunny"
            image={imageAlbun}
          />
          <SongItem title="Agosto" artist="Bad Bunny" image={imageAlbun} />
    
        </div>
      </main>
    </div>
  );
}

export default App;
