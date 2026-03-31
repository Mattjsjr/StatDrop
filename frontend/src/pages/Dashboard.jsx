import React from "react";
import Banner from '../components/Banner'
import Section from '../components/Section'
import StandingsTable from "../components/StandingsTable";
import { useLocation } from "react-router-dom";
import { HiDocumentText } from "react-icons/hi";
import BrowseFileButton from "../components/BrowseFileButton";

import "./Dashboard.css"

function Dashboard(){

    const location = useLocation();
    const fileName = location.state?.fileName;

    return(

        <>
        <Banner title={"Baseball Predictor"}></Banner>
        <main>
            <Section title={"Select Stats:"}>
                <div className="choice-container"></div>            
                <button className='section-button'>Train Model</button>
            </Section>
            <Section title={"Model Settings:"}>
                <p>Insert image</p>
            </Section>
            <Section title={"Results:"}>
                <StandingsTable></StandingsTable>
            </Section>
            <Section title={"Selected Document"}>
                <div className="file-wrapper">
                    <div className="file-container">
                        <HiDocumentText size={24} color={"#fff"}/>
                        <p>{fileName}</p>
                    </div>
                    <BrowseFileButton label="Change"/>
                </div>
            </Section>
        </main>
        </>
    )
}

export default Dashboard;