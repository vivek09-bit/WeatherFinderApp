// App.js
import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Header />
    <div className='row'>

      <WeatherSearch />
    </div>
    <Footer />
    </>
    
  );
   
};

export default App;