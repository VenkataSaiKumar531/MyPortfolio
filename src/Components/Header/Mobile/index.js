import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BrushIcon from '@material-ui/icons/Brush';
import './mobile.css'

const Mobile = ({open, setIsopen}) => {
    return(
        <div className='mobile'>
              <div className='closeIcon'>
                <CloseIcon onClick={()=>setIsopen((!open))}/>
              </div>
            <div className="mobile-options">

                        <div className='mobile-option'>
                            <a href='#projects'>Projects
                            <BrushIcon/>
                            </a>
                        </div>

                        <div className='mobile-option'>
                            <a href="#skills">Skills</a>
                            <MenuBookIcon/>
                        </div>

                        <div className='mobile-option'>
                            <a href="#work">Work</a>
                            <WorkIcon/>
                        </div>

                        <div className='mobile-option'>
                            <a href="#contact">Contact</a>
                            <ContactMailIcon/>
                        </div>

            </div>
       </div>
    )
}

export default Mobile;