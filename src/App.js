import React from 'react'
import "./App.scss"
import { Routes  ,Route} from 'react-router-dom'
import Layout from './component/Layout/Layout'
import  Hom from "././component/Home/Hom"
function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Layout />} >


        <Route index element={<Hom/>} />
      </Route>
    </Routes>
  
  
  </>
  )
}

export default App