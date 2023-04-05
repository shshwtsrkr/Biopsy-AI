// import logo from './logo.svg';
// import './App.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Navlinks from './components/Navlinks';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Developers from './components/Developers';
import Motivation from './components/Motivation';
import Solution from './components/Solution';
import Impact from './components/Impact';


function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/demo" element={<Demo/>}/>
      <Route path="/developers" element={<Developers />}/>
      <Route path="/developers" element={<Developers />}/>
      <Route path="/motivation" element={<Motivation />}/>
      <Route path="/solution" element={<Solution />}/>
      <Route path="/impact" element={<Impact />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
  );
}

export default App;
