import { useState } from 'react'

import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'


function App() {
     const [isVisibleNavbar, setisVisibleNavbar] = useState(false);
    const toggleNavbar = () => {
    setisVisibleNavbar((prev) => !prev);
      console.log('кликнул на бургер');
    }


  return (
    <>
      <div className='wrapper'>
        <Header toggleNavbar={toggleNavbar} isVisibleNavbar={isVisibleNavbar} />
        <div className='page'>fghfhfghfgh</div>
        <Footer />
      </div>
    </>
  )
}

export default App
