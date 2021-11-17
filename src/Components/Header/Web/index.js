import React from 'react';
import './web.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BrushIcon from '@material-ui/icons/Brush';

import MenuIcon from '@material-ui/icons/Menu';

const Web = () => {
    return(
        <div className='web'> 

                <div className='web-option'>
                    <a href='#projects'>Projects
                     <BrushIcon/>
                    </a>
                </div>

                <div className='web-option'>
                    <a href="#skills">Skills</a>
                    <MenuBookIcon/>
                </div>

                <div className='web-option'>
                    <a href="#work">Work</a>
                    <WorkIcon/>
                </div>

                <div className='web-option'>
                    <a href="#contact">Contact</a>
                    <ContactMailIcon/>
                </div>
                
          
       </div>
    )
}

export default Web;