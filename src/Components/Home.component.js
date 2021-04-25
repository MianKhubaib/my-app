import React from 'react'
import {Link } from 'react-router-dom'
import Tasklogo from './static/1.jpg'
import userlogo from './static/images.jpeg'
import Alogo from './static/C.jpeg'





const Home = () => {

    return(
    <div>
           
        <div className='tc'>
            <div className='flex-box pa3 flex-wrap dib ma3 shadow grow'>
                <img src={Tasklogo}  width='220' height='200' alt='This is pic' />
                <br></br>
                <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/Task"> Task Link </Link>
            </div>

            <div className='flex-box pa3 flex-wrap dib ma3 shadow grow'>
                <img src={userlogo}  width='220' height='200' alt='This is pic' />
                <br></br>
                <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/Users"> Users Link </Link>
            </div>

            <div className='flex-box pa3 flex-wrap dib ma3 shadow grow'>
                <img className='bg-black' src={Alogo}  alt='This is pic'  width='220' height='200'  />
                <br></br>
                <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/About"> About Link </Link>
            </div>
                
        </div>
    </div>

    )
}

export default Home;