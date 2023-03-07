import React from 'react';
import NavigationBar from './components/navbar/navbar';
import TresTarjetas from "./components/tarjetas/TresTarjetas";
import Barner from './components/barner-principal/Barner';
import Preparacion from './components/preparacion/Preparacion';
import Estadisticas from './components/estadistica/Estadistica';
import Experiencia from './components/experiencia/Experiencia';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Barner />
      <TresTarjetas />
      <Preparacion />
      {/* <Estadisticas /> */}
      <Experiencia />
      <Footer />
    </div>
  );
}

export default App;
