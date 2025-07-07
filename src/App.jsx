import React from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/products'
import Imgbar from './Components/imgbar'
import Seller from './Components/Seller'
import Sell from './Components/Sell'
import flip from './Components/flip'
import Flip from './Components/flip'


function App() {
  return (
    <>
      <div className="h-screen bg-gray-100">
        <Navbar />
        <Products />
        <Imgbar />
        <Seller/>
        <Sell/> 
        <Flip/>
      
       
      </div>
    </>
  )
}

export default App