//import { AcUnit } from '@material-ui/icons'
import React from 'react'
import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/Navbar'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
    </div>
    
  )
}

export default Home