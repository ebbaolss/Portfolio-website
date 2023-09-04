import './App.css';
import './styles.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cv from './components/Cv';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
        <Contact/>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
}

export default App;
