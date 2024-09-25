import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import NewsLetter from './components/Newsletter';
import Footer from './shared/Footer';


function App() {
  return <div className="jost-font">
    <NavBar />
    <Home />
    <Features />
    <About />
    <Pricing />
    <NewsLetter />
    <Footer />
  </div>;
}

export default App;
