import React, { useEffect } from "react";
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import './assets/fonts/fonts.css'
function App() {


  return (
    <>
      <div className="  ">
      <Navbar/> 
<Home></Home>
<Footer />

      
      </div>
    </>
  );
}

export default App;
