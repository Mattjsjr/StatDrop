import React from "react";
import Banner from '../components/Banner'
import Section from '../components/Section'
import StandingsTable from "../components/StandingsTable";

function Dashboard(){
    return(

        <>
        <Banner title={"Baseball Predictor"}></Banner>
        <main>
            <Section title={"Select Stats:"}>
            <div className="choice-container">
            </div>            

                <button className='section-button'>Train Model</button>
                </Section>
            <Section title={"Model Settings:"} footer={<p>R2 Score</p>}>
            <p>Insert image</p>
            </Section>
            <Section title={"Results:"}>
            <StandingsTable></StandingsTable>
            </Section>
        </main>
        </>
    )
}

export default Dashboard;