import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar/Navbar'
import MainSec from './Components/Main/MainSec'
import { Route,Routes } from 'react-router-dom'
import CardDetail from './Components/CardLists/CardDetail.jsx'
const App = () => {
  const[colors,setColors] = useState({bgColor:'white',color:'black',secondBgColor:'white',mode:'Dark Mode'})
  const getColors = ()=>{
    setColors((prevColor)=>prevColor.bgColor==="white"?{ bgColor: '#202c37', color: 'white' ,secondBgColor:'#2b3945',mode:'Light mode'}: {bgColor:'white',color:'black',secondBgColor:'white',mode:'Dark Mode'})
  }
  return (
    <>
       <Navbar colors={getColors} newcolors={colors}/>
       <Routes>
        <Route path='/' element={<MainSec newcolors={colors}/>}/>
        <Route path='/card/:id' element={<CardDetail newcolors={colors}/>}/>
       </Routes>
    </>
  )
}

export default App
