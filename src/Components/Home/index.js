import React from 'react';
import Header from '../Header/index'
import Body from '../Body/index'
import Footer from '../Footer/index'
import './Home.css'

const Home =() =>{
    return(
       <div className='Home'>
           <div>
                <Header/>
           </div>

           <div>
                <Body/>
           </div>

           <div>
                <Footer/>
           </div>


       </div>
    )
}
export default Home;