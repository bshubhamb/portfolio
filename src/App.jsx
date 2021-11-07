import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-front leading-7 text-xl">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </main>
  );
}

export default App;
