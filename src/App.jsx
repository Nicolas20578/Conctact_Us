import { useState } from 'react'
import reactLogo from './assets/Avengers.png'
import './App.css'
import { ContactUs } from './ContactUs/ContactUs'


function App() {  

  return (
    <div className="App">
      <div>        
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ContactUs />
    </div>
  )
}

export default App