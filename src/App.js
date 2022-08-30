import styled from "styled-components";
import {Routes,Route} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";


function App() {
  return (
   <Container>
      <Header />
     <Home />
     <Footer />
   </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  width:100vw;
  background-color:#5a5560;
`
