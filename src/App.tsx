// Importations de bibliothèques
import styled from 'styled-components';


// Importations de styles
import './App.scss';
import './style/base.scss';

// import PAge

import Navigation from './components/Navigation'
//import Header from './components/Header';
//import Hero from './components/Hero';


// Composant stylisé
const Styled = styled.div`
display: flex;
flex-direction: row;
height: 100vh;

  .navigation {
    display: flex;
    background-color: red;
    width: 300px; 
    justify-content: center;
    
  }

  .main {
    background-color: blue;
    flex-grow: 1;  
    position: relative;

    .elemBody {
      position: relative;

      .graf {
        position: absolute;
        top: 0;
        left: 0;
        height: 50px;
        background-color: yellow;
    }
  }
`;

// Composant App
function App() {
  return (
    <Styled>
      <section className="navigation">
        <Navigation/>
      </section>


      <section className="main">
        
     {/* {/* <Header/>
        <Hero/> 
        <div className="elemBody">
          <section className='graf'>
            <h3>Finance</h3>
          </section>
         
        </div>*/}
      </section> 
    </Styled>
  );
}

// Exportation
export default App;



