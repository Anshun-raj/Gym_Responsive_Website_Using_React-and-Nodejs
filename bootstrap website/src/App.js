import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Navbar from './SubComponents/Navbar';

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/feature' element={<Feature/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/gallery' element={<Gallery/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
         
    </div>
  );
}

export default App;
