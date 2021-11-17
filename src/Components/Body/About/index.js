import React from 'react';
import './About.css';
import codingImage from '../../../assets/images/CodingImage.png';
import SocialMedia from '../../Common/SocialMedia/index';

const About = () =>{
    return(
        <div className='about'>
            <div className='about-top'>

                    <div className='about-left'>
                      Hello There 👋, I am  <br/>
                     <span className='myName'>VenkataSai Kumar</span>  <br/>
                     I love expermenting with the Web.
                    </div>

                    <div className='about-right'>
                    <img src={codingImage} alt='Coding Image icon' height='420px'/>
                    </div>
            </div>
            <div className='about-bottom'>
             <SocialMedia/>
            </div>
        </div>
    )
}

export default About;