import React from 'react';
import './projectcard.css'

const ProjectCard = ({myId,myTitle,myAbout,myImage,myTags}) => {
    return(
        <div className='projectcard'>

                    <div className='project-info'>

                                <label className='project-title'>{myTitle}</label>

                        <p>{myAbout}</p>

                        <div className='project-tags'>
                          {
                              myTags.map((tag) => {
                                  return(
                                      <label className='tag'>{tag}</label>
                                  )
                              })
                          }
                        </div>
                    </div>
            
                    <img src={myImage} alr={myTitle} height='420px' className='project-photo'/>
              
        </div>
    )
}

export default ProjectCard;

{/* <h4>{myTitle}</h4>
<p>{myAbout}</p>
<h3>My Tags length is {myTags.length}</h3> */}