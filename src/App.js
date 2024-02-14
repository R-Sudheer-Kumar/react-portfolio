import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/about/About';
import ScrollToTop from './components/ScrollToTop';
import Project from './pages/project/Project';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';

function App() {
  return(
    <div className='home'>
      <BrowserRouter>
      <Navbar />
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
