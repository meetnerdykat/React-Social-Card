import React from 'react';
import Navbar from './components/NavComponent/Navbar';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import 'moment-timezone';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container mb-4">
        <HeaderContainer />
        <CardContainer />
      </div>
      <Footer />
      {/* end ALL div */}
    </div>
  );
};

export default App;
