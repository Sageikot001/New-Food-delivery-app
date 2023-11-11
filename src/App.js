import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero'
import Main from './Components/Main'
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='body'>
      <Nav />
      <Hero />
      <Main />
      </div>
      <Newsletter/>
      <Footer />
    </div>
  );
}

export default App;
