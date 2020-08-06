import React from 'react';
import Navegator from './Navegator/Navbar';
import Episodios from './componentes/episodios/Episodios';
import Text from './componentes/section/Text';
import Phone from './componentes/Phone';
import Venimos from './componentes/Venimos';
import Sistemas from "./componentes/Sistemas";
import Novedades from "./componentes/Novedades";
import Footer from "./componentes/footer/Footer";
import Invitados from "././componentes/Invitados";
import styled from "styled-components";

const StyledApp = styled.div`
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  p {
    font-family: "IBM Plex Mono", monospace;
  }
`;
function App() {
  return (
    <div>
     < Navegator/>
     < Text/>
    < Episodios/>
     <Phone/>
     <Venimos/>
     <Invitados/>

     <Sistemas/>
     <Novedades/>
     <Footer/>




     



    </div>
  );
}

export default App;
