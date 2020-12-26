import FileDetails from "./FileDetails";
import { useState } from "react";

function FileInput() {
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  return (
    <form>
      <div className="prose mt-4">
        <label className="font-bold block mb-2" htmlFor="field-files">
          Select your file(s)
        </label>
        <input
          type="file"
          name="files"
          id="field-files"
          onChange={handleChange}
          multiple
        />
      </div>
      {files.map((file) => (
        <FileDetails file={file} key={file.name} />
      ))}
    </form>
  );
}

export default FileInput;
