import React from "react";
import Banner from '../components/Banner'
import Section from '../components/Section'
import StandingsTable from "../components/StandingsTable";
import { useLocation } from "react-router-dom";
import { HiDocumentText } from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
import BrowseFileButton from "../components/BrowseFileButton";

import "./Dashboard.css"

function Dashboard(){

    const location = useLocation();
    const file = location.state?.file;

    const acceptedFileTypes = {
        "csv":true,
        "xlsx":true,
        "xls":true,
        "text/csv":true,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": true
    }

    const [headers, setHeaders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (file) {
            const uploadFile = async () => {
                setLoading(true);
                const fileData = new FormData();
                fileData.append('file', file);

                try {
                    const response = await fetch('http://localhost:5000/api/stats', {
                        method: 'POST',
                        body: fileData,
                    });

                    const columns = await response.json();
                    setHeaders(columns);
                    console.log(headers);
                } catch (error){
                    console.log(`Upload failed ${error}`);
                } finally {
                    setLoading(false);
                }
            }
            uploadFile();
        }
    }, [file])

    return(

        <>
        <Banner title={"Baseball Predictor"}></Banner>
        <main>
            <Section title={"Select Stats:"}>
                <div className="choice-container">
                    {headers.map((header, index) => (
                        <li>{header}</li>
                    ))}
                </div>            
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
                        <p>{file.name}</p>
                    </div>
                    <BrowseFileButton label="Change"/>
                </div>
            </Section>
        </main>
        </>
    )
}

export default Dashboard;