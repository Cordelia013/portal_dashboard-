// Importations de bibliothèques
import styled from 'styled-components';


// Composant stylisé
const StyledHero = styled.div`
  display:flex;
  flex-direction:row;
  height:100vh;

  .navigation {
    background-color: red;
    width: 30%
  }

  .main {
    background-color: blue;
    width: 70%;
  }
`;


export default function Hero() {
  return (
    <StyledHero>
        
    </StyledHero>
  )
}
