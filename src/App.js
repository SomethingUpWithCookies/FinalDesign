
import './App.css';
import Home from './pages/Home';

import About from './pages/About';
import News from './pages/News';
import Team from './pages/Team';
import ContactUs from './pages/Contact-Us';

import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/team" element = {<Team/>}/>
        <Route path="/contact-us" element = {<ContactUs/>}/>
      </Routes>
    </div>
  );
}
export default App;


