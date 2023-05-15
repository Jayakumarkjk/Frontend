import React from "react";
import axios from "axios";
import Upload from "../FileUpload/FileUpload.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import FileUpload from '../FileUpload/FileUpload.js';
import FileList from '../FileList/FileList.js';
import './Home.css'
import Downlaod from "../Downlaod/Download.js"



function Home (){
    const location=useLocation()

    const [files, setFiles] = useState([])

    const removeFile = (filename) => {
      setFiles(files.filter(file => file.name !== filename))
    }
  

    return (
        <div className="homepage">
       <h1>Hello {location.state.id} welcome to the home</h1>

             <div className="title"></div>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
      <Downlaod/>


        </div>
    )
}








// function Home(){
//     const [file, setFile] = useState([]);


//    const location=useLocation()
   

//     return(
//         <div className="homepage">
//             <h1>Hello {location.state.id} and welcome to the home</h1>
           
//             <Upload/>

//         </div>
//     )


// }

export default Home