import React from 'react';
import './Projects.css';
import {ProjectDetails} from '../../Data/ProjectDetails';
import ProjectCard from './ProjectCard'


const Projects = () =>{
    return(
        <div className='projects'>
            <label className='projct-title'>Projects </label>
            <div>
                    {
                        ProjectDetails.map(({id,title,about,image,tags}) => {
                            return(
                                <ProjectCard myId={id} myTitle={title} myAbout={about} myImage={image} myTags={tags}/>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Projects;    