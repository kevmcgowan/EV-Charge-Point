import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/header" element={<Header />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;