import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Nav from './component/Navigation/Nav';
import BackgroundParticles from './component/Background/Background';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
        < Nav />

        {/* === REACT ROUTES === */}
        <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/About' element={< About />} />
            <Route path='/Resume' element={< Resume />} />
            <Route path='/Projects' element={< Projects />} />
            <Route path='/Contact' element={< Contact />} />
        </Routes>

        {/* === CREDIT === */}
        <p className='credit'> © Cornelius </p>

        {/* === BACKGROUND === */}
        < BackgroundParticles />

    </>
  );
}

export default App;
