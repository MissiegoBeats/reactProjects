import React, { useState } from 'react';
import '../styles/FileUpload.css';

function FileUpload() {
  const [file, setFile] = useState();

  function handleFile(event) {
    event.preventDefault();
    setFile(event.target.files[0]);
    console.log(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    fetch(
      'url', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name='file' onChange={handleFile}/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;