import React from 'react';
import './SocialMedia.css';
import {SocialMediaList} from '../../Data/Social.js'

const SocialMedia = () =>{
    console.log("Social Media LIST",SocialMediaList)
    return(
        
            SocialMediaList.map((item)=>{
                return(
                       <a className='socialmedia' href={item.link} target='_blank'>
                                <img src={item.icon} width='50px' height='50px'/>
                       </a>
                     )
            })
         )
}

export default SocialMedia;