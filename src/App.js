import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Mask1 from './components/Mask1/Mask1';
import Mask2 from './components/Mask2/Mask2';
import Carouselcover from './components/Carousel/Carouselcover';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Mask1></Mask1>
     <Content></Content>
     <Carouselcover></Carouselcover>
     <Mask2></Mask2>
     <Footer></Footer>
    </div>
  );
}

export default App;
