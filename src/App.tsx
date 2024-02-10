import './App.css';
import ScrollingChampionshipStandings from './components/ScrollingChampionshipStandings/ScrollingChampionshipStandings';
import SimpleDriverData from './components/SimpleDriverData/SimpleDriverData';

function App() {
  return (
    <div className="App">
      <h1>Simple Driver Data</h1>
      <SimpleDriverData position={1} countryCode={'DE'} driverName={'Akashic'} points={49} />
      <hr />
      <h1>Scrolling Championship Standings</h1>
      <ScrollingChampionshipStandings standings={
        [
          { position: 1, countryCode: 'DE', driverName: 'Akashic', points: 49 },
          { position: 2, countryCode: 'GB', driverName: 'PirateLaserBeam', points: 35 },
          { position: 3, countryCode: 'FR', driverName: 'Red', points: 32 },
        ]
      } />
      <hr />
    </div>
  );
}

export default App;
