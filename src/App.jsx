import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Showcase } from "./components/Showcase/Showcase";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
