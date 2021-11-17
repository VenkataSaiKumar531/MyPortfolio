import React from 'react';
import './header.css';
import {useState} from 'react';
import Mobile from './Mobile/index.js'
import Web from './Web/index.js';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {

    const [open, setIsopen]= useState(false);

    return(
        <div className='header'>
                
                              <div className="logo">LOGO</div>


                            <div className='menu'>

                                        <div className='web-menu'>
                                            <Web/>
                                        </div>

                                        <div className='mobile-menu'>

                                                <div onClick={()=>setIsopen((toggle) =>!toggle)}>
                                                    <MenuIcon/>
                                                </div> 

                                                    { open &&  <Mobile open={open} setIsopen={setIsopen}/> }
                                
                                        </div>
                            </div>

        </div>
    )
}

export default Header;