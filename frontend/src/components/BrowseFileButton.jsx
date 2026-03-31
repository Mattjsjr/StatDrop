import { useFileHandler } from "../hooks/useFileHandler";
import "./BrowseFileButton.css"

function BrowseFileButton({label, className}) {

    const {handleFile} = useFileHandler();

    return (
        <>
            <input type="file" 
            id="open-file" 
            className="hidden"
            accept=".csv, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={(e) => handleFile(e.target.files[0])}
            />
            <button 
            className={className}
            onClick={
                (e) => document.getElementById("open-file").click()
            }   
            >{label}</button>

        </>
    )


}

export default BrowseFileButton;