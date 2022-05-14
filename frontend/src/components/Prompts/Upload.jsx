const axios = require('axios');

export default function Upload(props) {

  const { id, setId, setList, setLoading } = props;

  const onFormSubmit = event => {
    event.preventDefault();
    setLoading("true");
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
        console.log(response.data);
        setList(prev => [...prev, { prompt: response.data.original, response: response.data.data, id: id, engine: "Image Upload", time: Date.now(), link: response.data.link }]);
        setLoading("false");
        setId(prev => [...prev, prev[prev.length - 1] + 1]);
      })
  }

  return (
    
    <div>
      <form onSubmit={onFormSubmit}>
        <h3>Upload Image</h3>
        <input className="imageUpload" type="file" onChange={onFormSubmit} />
      </form>
    </div>
    
  )

}