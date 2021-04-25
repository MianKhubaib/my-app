import React from 'react';
import Alogo from './static/C.jpeg';
import MK from './static/MK.jpg';

 const About =()=> {

        return(

 <div>

            <div className="flex-wrap">
            <h1 className="bg-light-blue  pa2 shadow dib f4">We Believe in What Sadhguru Says</h1>
             <p className="bg-near-white dib grow pa2 br2 f3"> "Whatever kind of business you are into, ultimately, there is only one business, that is human wellbeing." </p>
            </div>

            <div>
                 <div className='br2 grow tr dib ma3 shadow'>
                    <img className='bg-black' src={Alogo}  alt='This is pic'  width='150' height='130'  />
                    <p className="f4 flex bg-green dib tl grow shadow"> Orlando, FL USA</p></div>
            
                 <div className='br2 grow tl dib ma3 shadow'>
                    <img className='bg-black' src={MK}  alt='This is pic'  width='140' height='130'  />
                    <p className="f4 flex bg-green dib tl grow shadow"> Developer,  AiF</p></div>

                    <br></br>
                    <p className="bg-light-red f3 grow dib flex-box">Copyright : Idea , Design and Code is the property of Devza</p>
    
              
            </div>
            
</div>

        )

 }

 export default About;