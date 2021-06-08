import './App.css';
import Header from './Components/Header/Header.js';
import Banner from './Components/Banner/Banner.js';
import Middle from './Components/Middle/Middle.js';
import Bottom1 from './Components/Bottom1/Bottom1.js';
import Bottom2 from './Components/Bottom2/Bottom2.js';
import Bottom3 from './Components/Bottom3/Bottom3.js';
import Bottom4 from './Components/Bottom4/Bottom4.js';
import DisplayProduct from './Components/DisplayProduct/DisplayProduct.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Middle />
      <Bottom1 />
      <Bottom2 />
      <Bottom3 />
      <Bottom4 />
      <DisplayProduct />
       <Footer />
    </div>
  );
}

export default App;
