import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Work from "../components/Work";
function HomePage() {
    return (
        <>
            <header>
                <Header active="home" />
            </header >
            <AboutMe />
            <Projects/>
            <Work/>
        </>
    )
}

export default HomePage