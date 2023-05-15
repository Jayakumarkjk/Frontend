import React from 'react';
import FormData from "form-data";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./FileUpload.css";




// function Upload() {
//   const [file, setFile] = useState(null);
//   const upload = (e) => {
//     e.preventDefault();
//     let formData = new FormData();
//     formData.append("screenshot", file);
//     Axios.post("http://localhost:8000/", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }).then((res) => {
//       console.log("Success ", res);
//     });
//   };
//   return (
//     <div className="file-card">
//       <div className='file-inputs'>
//       <input
//         type="file"
//         name="screenshot"
//         onChange={(e) => {
//           setFile(e.target.files[0]);
//         }}
//       />
//       <button onClick={(e) => upload(e)}><FontAwesomeIcon icon={faPlus} />Submit</button>
//     </div>

//     <p className='main'></p>
//     </div>
//   );
// }
const Upload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
      const file = event.target.files[0];
      if(!file) return;
      file.isUploading = true;
      setFiles([...files, file])

      // upload file
      const formData = new FormData();
      formData.append(
          "newFile",
          file,
          file.name
      )
      axios.post('http://localhost:8000/', formData)
          .then((res) => {
              file.isUploading = false;
              setFiles([...files, file])
          })
          .catch((err) => {
              // inform the user
              console.error(err)
              removeFile(file.name)
          });
  }

  return (
      <>
          <div className="file-card">

              <div className="file-inputs">
                  <input className='inp' type="file" onChange={uploadHandler} />
                  <button className='upbutton'>
                      <i>
                          <FontAwesomeIcon icon={faPlus} />
                      </i>
                      Browse File
                  </button>
              </div>

              <p className="main">Supported files</p>
              <p className="info">All formats</p>

          </div>
      </>
  )
}

export default Upload;