import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './home/Home';
import Footer from './footer/footer';
import About from './about/About';
import SignUp from './signup/SignUp';
import SignIn from './signup/SignIn';
import {BrowserRouter as Router , Routes , Route, RouterProvider} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route  path="/about" element={ <About/>}/>
        <Route  path="/signup" element={ <SignUp/>}/>
        <Route  path="/signin" element={ <SignIn/>}/>
      </Routes>
      <Footer/>
      </Router>

   

    </div>
  )
}

export default App
