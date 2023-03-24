import './App.css';
import Home from './Routes/Home';
import AI from './Routes/AI';
import Page3 from './Routes/Page3';
import Planos from './Routes/Planos'; 
import {  Routes, Route } from 'react-router-dom';
import NavBar from './Routes/NavBar';
import  Footer  from './Routes/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div id="loading-spinner">Loading...</div>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/AI" element={<AI />} />
            <Route exact path="/Planos" element={<Planos />} />
            <Route exact path="/Page3" element={<Page3 />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;



