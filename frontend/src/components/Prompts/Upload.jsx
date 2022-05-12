const axios = require('axios');

export default function Upload(props) {

  const onFormSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    console.log(event.target.files[0]);
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
      })
  }

  return (
    
    <div>
      <form onSubmit={onFormSubmit}>
        <h3>Upload Image</h3>
        <input className="imageUpload" type="file" onChange={onFormSubmit} />
        <button type="submit">Upload</button>
      </form>
    </div>
    
  )

}