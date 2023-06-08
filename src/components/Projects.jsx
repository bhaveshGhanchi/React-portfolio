import React from 'react'
import ProjCard from './ProjCard'
import './styles/projects.css'
import {data} from '../data'

function Projects() {
  const projEle = data.Project.map((item,index)=>{
    
    return <ProjCard data={item} key={index}  />
  })
  return (
    <div className="proj-main">
        {projEle}
        
    </div>
  )
}

export default Projects