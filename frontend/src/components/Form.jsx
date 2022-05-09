import { useState } from "react";
const axios = require('axios');

export default function Form(props) {

  const { setList } = props;
  const [prompt, setPrompt] = useState('');

  const onChange = event => {
    setPrompt(event.target.value);
  }
  
  const savePrompt = event => {
    event.preventDefault();
    const lockedPrompt = prompt;
    axios.post("/prompts", { prompt: lockedPrompt })
      .then(response => {
        console.log(response.data);
        setList(prev => [...prev, { prompt: lockedPrompt, response: response.data }]);
      })
  }

  return (
    
    <div>
      <input type="text" name="prompt" onChange={onChange}/>
      <button onClick={savePrompt}>Submit</button>
    </div>
    
  )

}