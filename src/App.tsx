import "./App.css";
import ScrollingChampionshipStandings from "./components/ScrollingChampionshipStandings/ScrollingChampionshipStandings";
import SimpleDriverData from "./components/SimpleDriverData/SimpleDriverData";
import VerticalChampionshipStandings from "./components/VerticalChampionshipStandings/VerticalChampionshipStandings";

const standingsTemplateData = [
  { position: 1, countryCode: "DE", driverName: "Akashic", points: 39 },
  { position: 2, countryCode: "GB", driverName: "PirateLaserBeam", points: 35 },
  { position: 3, countryCode: "FR", driverName: "Red", points: 32 },
  { position: 4, countryCode: "AT", driverName: "Kaiser", points: 30 },
  { position: 5, countryCode: "IE", driverName: "Pixel", points: 28 },
];

function App() {
  return (
    <div className="App">
      <h1>Simple Driver Data</h1>
      <div className="simpleDriverData">
        <SimpleDriverData
          position={1}
          countryCode={"DE"}
          driverName={"Akashic"}
          points={49}
        />
      </div>
      <hr />
      <h1>Scrolling Championship Standings</h1>
      <ScrollingChampionshipStandings standings={standingsTemplateData} />
      <hr />
      <h1>Vertical Championship Standings</h1>
      <VerticalChampionshipStandings standings={standingsTemplateData} />
    </div>
  );
}

export default App;
