import React, { useState } from "react";
import axios from "axios";
import './msg.css'
function MessagePage() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", file);

    axios.post("/server/upload", formData).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
    <div className="file-input">
    <input style={{}} type="file" placeholder="Ajouter photos" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {previewUrl && <img src={previewUrl} alt="Preview" />}
      </div>
<select>
  <option value="1">option1</option>
  <option value="2">option2</option>
  <option value="3">option3</option>
</select>
    </>
  )
}

export default MessagePage

