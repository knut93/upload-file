import React, { useState } from "react";

interface StaffInterface {
    firstName: string
}

function Upload() {
    const [currentFile, setCurrentFile] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { files } = event.target;
        if(files) {
            const fileRef = files[0] || "";
            const reader = new FileReader();
            reader.readAsText(fileRef, "UTF-8");
            reader.onload = (event: any) => {
                setCurrentFile(event.target.result)
            }
        }
    }    

    return (
        <div>
            <h1>Upload a file to display its contents</h1>
            <br />
            <input type="file" onChange={handleChange} />
            <br />
            {currentFile && <h2>File contents:</h2>}
            {currentFile}
        </div>
    );
};

export default Upload;