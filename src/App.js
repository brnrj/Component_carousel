import Carousel from './components'
import './App.css';
import { useContext } from 'react';
import Context from './context/Context'
function App() {
  const {pokemon, handleRight, handleLeft, value} = useContext(Context)
  console.log(value)
  return (
    <div className="App">
      <Carousel.Container>
        <Carousel.ImageContainer theme={value}>
          {pokemon.map((element, index) => (
            <Carousel.Image key={index} src={element.imageUrl}/>
          ))}
        </Carousel.ImageContainer>
        <Carousel.ButtonsContainer>
          <Carousel.Button onClick={handleLeft}>Left</Carousel.Button>
          <Carousel.Button onClick={handleRight}>Right</Carousel.Button>
        </Carousel.ButtonsContainer>
      </Carousel.Container>
    </div>
  );
}

export default App;
