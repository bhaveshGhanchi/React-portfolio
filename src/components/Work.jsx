import React from 'react'
import WorkCard from './WorkCard'
import './styles/work.css'
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
function Work() {
  return (
    <div className="outer-cont">

    <div className="Work-main">
        <div className="work-cont-heading">
            <BusinessCenterRoundedIcon color="action"/>
            Internship
        </div>
        <div className="all-data">
        <WorkCard/>
        <WorkCard/>
        </div>
    </div>
    </div>
    
  )
}

export default Work