import React from "react";
import python from "../assets/projectIcon/python.png";
import C from '../assets/projectIcon/C.png';
import java from '../assets/projectIcon/java.png';
import JS from '../assets/projectIcon/js.png';
import tableau from '../assets/projectIcon/tableau.png';
import Website from '../assets/projectIcon/web.png';
import './styles/card.css'

function ProjCard(props) {
    const { data } = props
    const projIcon = [C, python, java, tableau, Website, JS]
    return (
        <>
            <div className="card-container">
                <div className="logo-cont card-cont">
                    <img src={projIcon[data.projectBase]} className="logo" alt="Project logo" />
                </div>
                <div className="project-title card-cont">{data.title}</div>
                <div className="project-desc card-cont">
                    {data.desc}
                </div>
                {data.link &&
                    <div className="project-link-cont card-cont"><a className="project-link" href={data.link}>View on Github</a></div>
                }
            </div>
        </>
    );
}

export default ProjCard;
