import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Easter from './Components/Easter-egg'; // Import the Easter component
import Home from './Pages/Home';
import About from './Pages/About';
import Cv from './Pages/Cv';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="site-container">
        <header className="site-header">
          <Menu />
        </header>
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<Cv />} />
            <Route
              path="/portfolio"
              element={<Portfolio userName={'janajohansson00'} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <Footer />
        </footer>
        <Easter /> {}
      </div>
    </Router>
  );
}

export default App;
