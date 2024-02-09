import './App.css';
import SimpleDriverData from './components/SimpleDriverData';

function App() {
  return (
    <div className="App">
    <div className="drivers">
      <SimpleDriverData position={1} countryCode={'DE'} driverName={'Akashic'} points={49} />
      <SimpleDriverData position={2} countryCode={'GB'} driverName={'PirateLaserBeam'} points={35} />
      <SimpleDriverData position={3} countryCode={'FR'} driverName={'Red'} points={20} />
      <SimpleDriverData position={4} countryCode={'US'} driverName={'Red2'} points={10} />
      <SimpleDriverData position={5} countryCode={'NL'} driverName={'Red3'} points={6} />
      <SimpleDriverData position={6} countryCode={'LU'} driverName={'Red4'} points={5} />
      <SimpleDriverData position={7} countryCode={'BE'} driverName={'Red5'} points={4} />
      <SimpleDriverData position={8} countryCode={'DK'} driverName={'Red6'} points={3} />
      <SimpleDriverData position={9} countryCode={'FI'} driverName={'Red7'} points={2} />
      <SimpleDriverData position={10} countryCode={'EU'} driverName={'Red8'} points={1} />
      <SimpleDriverData position={11} countryCode={'FR'} driverName={'Red9'} points={0} />
    </div></div>
  );
}

export default App;
