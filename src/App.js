import "./styles/App.scss"
import "./styles/header.scss"
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/home.scss"
import Agenda from "./components/Agenda";
import Brands from "./components/Brands";
import "./styles/agenda.scss";
import "./styles/brands.scss"
import Glimses from "./components/Glimses";
import "./styles/glimses.scss"
import Map from "./components/Map";
import "./styles/map.scss"
import FAQ from "./components/Question";
import "./styles/Question.scss"
import "./styles/mediaquery.scss"
function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Agenda/>
    <Brands></Brands>
    <Map></Map>
    <FAQ/>
    <Glimses></Glimses>
    </div>
  );
}

export default App;
