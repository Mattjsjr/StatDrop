import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const useFileHandler = () => {

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
            console.log(`Selected file type ${selectedFile.name}`);
            navigate("/dashboard", {state: {fileName: selectedFile.name}});
        } else {
            alert("Please upload a valid file");
            return null;
        }
    }
    return {handleFile};
}