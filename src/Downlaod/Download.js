import Axios from "axios";
import FileDownload from "js-file-download";

export default function Download() {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: `http://localhost:8000/uploads?`,
      method: "GET",
      responseType: "blob"
      
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "filename");
    });
  };


  return (
    <div>
      <button onClick={(e) => download(e)}>Download</button>
    </div>
  );
  }