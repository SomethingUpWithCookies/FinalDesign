
import './App.css';
import Home from './pages/Home';

import About from './pages/About';
import News from './pages/News';
import Team from './pages/Team';
import ContactUs from './pages/Contact-Us';
import BlogDetails from './pages/BlogDetails';

import {Route, Routes} from 'react-router-dom';
import FirstPost from './blogs/FirstPost';


function App() {

  return (
    <div>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/team" element = {<Team/>}/>
        <Route path="/contact-us" element = {<ContactUs/>}/>
        <Route path="/blog">
          <Route path="/blog/1" element ={<FirstPost/>}/>
        </Route>
      </Routes>
     
    </div>
  );
}
export default App;


