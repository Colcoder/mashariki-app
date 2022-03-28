import './App.css'; //styling file import

//component imports
import Header from './components/Header'
import Convert from './components/Convert';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Convert/>
     <Footer/>
    </div>
  );
}

export default App;
