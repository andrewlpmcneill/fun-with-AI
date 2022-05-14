import Errors from './Errors';
const axios = require('axios');

export default function Upload(props) {

  const { id, setId, setList, loading, setLoading, uploadError, setUploadError } = props;

  const onFormSubmit = event => {
    event.preventDefault();
    setUploadError(false);
    setLoading("true");
    let data = new FormData();
    if (!event.target.files[0]) {
      setLoading("false");
      console.log('rejected undefined');
      return;
    }
    const file = event.target.files[0];
    console.log(file);
    console.log(file.type);
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      console.log('rejected bad file type');
      setUploadError(true);
      setLoading("false");
      return;
    }

    data.append('file', event.target.files[0]);

    axios.post('/upload', data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US, en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      }
    })
      .then(response => {
        console.log('Image sent to server');
        console.log(response.data);
        setList(prev => [...prev, { prompt: response.data.original, response: response.data.data, id: id, engine: "Image Upload", time: Date.now(), link: response.data.link }]);
        setLoading("false");
        setId(prev => [...prev, prev[prev.length - 1] + 1]);
      })
  }

  return (
    
    <div
      className="OCR-mode-body"
    >
      <div
        className="OCR-mode-upload"
      >
        <form>
          <div
            className="modes"
          >
            <h6
              aria-busy={loading === "true" ? "true" : "false"}
            >
              {loading === "true" ? "Uploading..." : "Upload Image"}
            </h6>
          </div>
          <input
            className="imageUpload"
            type="file"
            onChange={onFormSubmit}
          />
        </form>
        {uploadError && <Errors error="upload"/>}
      </div>
      <div className="OCR-mode-text">
        <p>
          Select a <strong>.jpeg</strong> or <strong>.png</strong> image to upload. The server will apply optical character recognition (OCR) by TesseractJS on the image, followed by a cleanup pass by GPT-3. 
          <br /><br />
          Works for images of printed text only.
        </p>
      </div>
    </div>
    
  )

}