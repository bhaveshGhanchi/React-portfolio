import React from 'react'
import WorkCard from './WorkCard'
import './styles/work.css'
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import {data} from '../data'
function Work() {
  
  
  const workEle = data.Internship.map(item=>{
    // console.log(item);
     return <WorkCard data={item}/>
  })
  return (
    <div className="outer-cont">

    <div className="Work-main">
        <div className="work-cont-heading">
            <BusinessCenterRoundedIcon color="action"/>
            Internship
        </div>
        <div className="all-data">
          {workEle}
          
        </div>
    </div>
    </div>
    
  )
}

export default Work