import React, { useState } from "react";
import './UploadPage.css'
import { FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function UploadPage(){

    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const acceptedFileTypes = {
        "csv":true,
        "xlsx":true,
        "xls":true,
        "text/csv":true,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": true
    }

    const handleFile = (selectedFile) => {
        if (selectedFile && selectedFile.type in acceptedFileTypes){
            setFile(selectedFile);
            console.log(`Selected file ${selectedFile.name}`);
            navigate("/dashboard", {state:{fileName: selectedFile.name}});
        } else {
            alert("Please upload a csv")
        }
    };

    return (
        <div className="file-drop-container">
            <div 
            className="file-drop"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                handleFile(e.dataTransfer.files[0]);
            }}
            >
                <h1>Upload a CSV</h1>
                <FiUploadCloud className="file-upload-icon"/>
                <input type="file" 
                id="file-input"
                accept=".csv, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={(e) => handleFile(e.target.files[0])}
                />
                <button className="file-upload-button"
                onClick={() => document.getElementById("file-input").click()}>Browse</button>
            </div>
            <h2>Or click here to use a sample file</h2>
        </div>
    )
}

export default UploadPage;