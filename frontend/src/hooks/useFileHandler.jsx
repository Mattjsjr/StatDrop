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
            try{
                const response = await fetch('http://localhost:5000/api/stats', {
                    method: 'POST',
                    body: fileData,
                });

                const data = await response.json();
                console.log(`Headers from flask: ${data}`);
                navigate("/dashboard", {state: {fileName: selectedFile.name}});

            } catch (error) {
                console.log(`Upload failed ${error}`)
            }

        } else {
            alert("Please upload a valid file");
            return null;
        }
    }
    return {handleFile};
}