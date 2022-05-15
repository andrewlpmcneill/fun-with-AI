import Errors from './Errors';
const axios = require('axios');

export default function Upload(props) {

  const {
    id,
    setId,
    setList,
    loading,
    setLoading,
    uploadError,
    setUploadError
  } = props;

  // Initiate loading spinners and skeleton result, send image to server
  const onFormSubmit = event => {
    event.preventDefault();
    setLoading(true);
    setUploadError(false);
    let data = new FormData();
    // Validation for when user presses "cancel" when choosing a file
    if (!event.target.files[0]) {
      setLoading(false);
      return;
    }
    const file = event.target.files[0];
    // Incorrect file type validation
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      setUploadError(true);
      setLoading(false);
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
        // Update results to trigger new result render
        setList(prev => [...prev, { prompt: response.data.original, response: response.data.data, id: id, engine: "Image Upload", time: Date.now(), link: response.data.link }]);
        setLoading(false);
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
              aria-busy={loading ? "true" : "false"}
            >
              {loading ? "Uploading..." : "Upload Image"}
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
      <div
        className="OCR-mode-text"
      >
        <p>
          Select a <strong>.jpeg</strong> or <strong>.png</strong> image to upload. The server will apply optical character recognition (OCR) by TesseractJS on the image, followed by a cleanup pass by GPT-3. 
          <br /><br />
          Works for images of printed text only.
        </p>
      </div>
    </div>
    
  )

}