import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home';
import Product from './components/product/product';
import AboutUs from './components/about-us/about-us';
import Contact from './components/contact/contact';
import NotFound from './components/not-found/not-found';


function App() {
     const [isVisibleNavbar, setisVisibleNavbar] = useState(false);
    const toggleNavbar = () => {
    setisVisibleNavbar((prev) => !prev);
      console.log('кликнул на бургер');
    }


  return (
    <>
      <Router>
           <div className='wrapper'>
            <Header toggleNavbar={toggleNavbar} isVisibleNavbar={isVisibleNavbar} />
              <div className='page'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Product />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />

                </Routes>
     
              </div>
             <Footer />
            </div>
      </Router>
 
    </>
  )
}

export default App
