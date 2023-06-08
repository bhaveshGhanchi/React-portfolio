import React from "react";
import './styles/workcard.css'
function WorkCard(props) {
  return (
    <div className="work-cont">
      <div className="company-logo-cont">
        <img
            className="company-logo"
          src="https://media.licdn.com/dms/image/C4D0BAQHQrriHS7dJLw/company-logo_100_100/0/1676910641306?e=1694044800&v=beta&t=LMzVkMCaybs5sK0I9MlwAQcz1nkT6p3XcUhJNvrmHZ8"
          alt="Company logo"
        />
      </div>
      <div className="Work-data">
        <div className="company-name">sayHey</div>
        <div className="work-head">

        <div className="job-title">
            Backend-Developer
        </div>
        <div className="job-period">
            June- August 2022
        </div>
        </div>
    </div>
    </div>
  );
}

export default WorkCard;
