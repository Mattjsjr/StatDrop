import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const useFileHandler = () => {

    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const fileData = new FormData();

    const acceptedFileTypes = {
        "csv":true,
        "xlsx":true,
        "xls":true,
        "text/csv":true,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": true
    }

    const handleFile = async (selectedFile) => {
        if (selectedFile && selectedFile.type in acceptedFileTypes){
            setFile(selectedFile);
            console.log(`Selected file type ${selectedFile.name}`);
            fileData.append('file', selectedFile);
            
            navigate("/dashboard", {state: {file: selectedFile}});

        } else {
            alert("Please upload a valid file");
            return null;
        }
    }
    return {handleFile};
}