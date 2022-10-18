import Navigation from "./components/Navigation";
import BirthdayBoy from "./components/Birthdayboy";
import AboutActivity from "./components/About";
import Map from "./components/Map";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navigation />
      <BirthdayBoy />
      <AboutActivity/>
      <Map />
    </div>
  );
}

export default App;
