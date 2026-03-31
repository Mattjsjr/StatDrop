import './UploadPage.css'
import { FiUploadCloud } from "react-icons/fi";
import { useFileHandler } from '../hooks/useFileHandler.jsx'
import BrowseFileButton from '../components/BrowseFileButton.jsx';

function UploadPage(){

    const {handleFile} = useFileHandler();

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

                <BrowseFileButton label="Select" className="file-upload-button"/>
            </div>
            <h2>Or click here to use a sample file</h2>
        </div>
    )
}

export default UploadPage;