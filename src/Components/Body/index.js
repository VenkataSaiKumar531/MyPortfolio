import React from 'react';
import './body.css';
import About from './About/index';
import Projects from './Projects/index';
import Skills from './Skills/index';
import Work from './Work/index';
import Contact from './Contact/index'
const Body = () => {
    return(
        <div className='body'>
            
            <section id='about'>
                <About/>
            </section>

            <section id='projects'> 
               <Projects/>
            </section>

            <section id='skills'>
                <Skills/>
            </section>

            <section id='work'> 
               <Work/>
            </section>

            <section id='contact'>
              <Contact/>
            </section>

        </div>            
    )
}

export default Body