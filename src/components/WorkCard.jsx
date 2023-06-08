import React from "react";
import './styles/workcard.css'
function WorkCard(props) {
  const {data} =props
  return (
    <div className="work-cont">
      <div className="company-logo-cont">
        <img
            className="company-logo"
          src={data.companyLogo}
          alt="Company logo"
        />
      </div>
      <div className="Work-data">
        <div className="company-name">{data.name}</div>
        <div className="work-head">

        <div className="job-title">
            {data.jobTitle}
        </div>
        <div className="job-period">
            {data.period}
        </div>
        </div>
    </div>
    </div>
  );
}

export default WorkCard;
