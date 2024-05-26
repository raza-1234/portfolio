import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";

function App() {
  return (
    <div className="main-background">
      <NavBar />
      <Hero />
      <Services />
      <Skills />
    </div>
  );
}

export default App;
