
import { useState } from 'react';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar';


import Header from './Components/Header/Header';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      <Header setPage={setPage} />
      

      {page === 'landing' ? <Landing /> : <About />}
      
      <Sidebar />

      <Footer />
 

    </>
  );
}

export default App;