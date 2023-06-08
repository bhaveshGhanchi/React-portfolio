import React from "react";
import python from "../assets/projectIcon/python.png";
import './styles/card.css'

function ProjCard(props) {
    return (
        <>
            <div className="card-container">
                <div className="logo-cont card-cont">
                    <img src={python} className="logo" alt="Project logo" />
                </div>
                <div className="project-title card-cont">Project 1</div>
                <div className="project-desc card-cont">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                    ducimus hic non alias, expedita iste voluptas fugiat modi obcaecati
                    beatae, labore accusamus corrupti rem placeat maiores delectus. Optio,
                    aliquam animi!
                </div>
                <div className="project-link-cont card-cont"><a className="project-link" href="https://github.com/bhaveshGhanchi/HousingManagementSystem">View on Github</a></div>
            </div>
        </>
    );
}

export default ProjCard;
