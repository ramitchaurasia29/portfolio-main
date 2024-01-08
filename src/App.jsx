import { Route, Routes } from 'react-router-dom';
import './App.css'

import Contact from './components/Contact';
import Hero from './components/Hero';
import Newcom from './components/Newcom';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        </Routes>    
    </>
  )
}

export default App;
