import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './pages/Nabar';


function App() {
  
  return (
    <>

    <Navbar></Navbar>

          <Routes>
            <Route exact path="/" element={<Home/>} />      
            <Route exact  path="/about" element={<About/>} /> 
                               {/* as- /about  path Name Should Be Same - like in Navbar link Items */}
            <Route  exact path="/blog" element={<Blog/>}/>
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>

    </>
  );
}

export default App;