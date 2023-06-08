import React from "react";
import "./styles/AboutMe.css";
import profilepic from "../assets/profilesq.jpg";
import email from "../assets/email.png";
import insta from "../assets/instagram.png";
import git from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import {data} from '../data'
export default function AboutMe() {
    console.log(data.socialMedia);
    return (
        <>
            <div className="main-container-about">
                <div className="container-about">
                <div className="right-about">
                        <div className="abt-content-pic">
                            <img src={profilepic} alt="profile pic" className="profilePic" />
                        </div>
                    </div>
                    <div className="left-about">
                        <div className="abt-content">
                            <div className="intro-head">CSE Student</div>
                            <p className="intro">
                                I am a motivated and ambitious last-year Computer Science
                                student at K.J. Somaiya College of Engineering (KJSCE), pursuing
                                a B.Tech degree. With a strong passion for{" "}
                                <span className="mainpart"> Data Science </span> and{" "}
                                <span className="mainpart"> Full Stack Development </span>, I am
                                dedicated to expanding my knowledge and skills in these areas.{" "}
                                
                                
                        . This proficiency enables me
                        to tackle a wide range of projects and adapt to various
                        programming paradigms.
                    </p>
                    <div className="media-links">
                        <a
                            className="social-links"
                            href={`mailto:${data.socialMedia.mail}`}
                        >
                            <img className="media-icons" src={email} alt="" />
                        </a>
                        <a className="social-links" href={data.socialMedia.Insta}>
                            <img className="media-icons" src={insta} alt="" />
                        </a>
                        <a className="social-links" href={data.socialMedia.github}>
                            <img className="media-icons" src={git} alt="" />
                        </a>
                        <a className="social-links" href={data.socialMedia.linkedIn}>
                            <img className="media-icons" src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
                    </div>
                    
            </div >
        </div >
    </>
  );
}
