import { useState, useEffect } from "react";
import { generateTemplatePrompt } from "../../helpers/generateTemplatePrompt";
import { generateSuggestionTemperature } from "../../helpers/generateSuggestionTemperature";
import Suggestions from "./Suggestions";
const axios = require('axios');

export default function Form(props) {

  const { setList, temperature, setTemperature, engine } = props;
  const [prompt, setPrompt] = useState('');
  const [selected, setSelected] = useState();

  useEffect(() => {
    setPrompt(generateTemplatePrompt(selected));
    setTemperature(generateSuggestionTemperature(selected, temperature))
  }, [selected])

  const onChange = event => {
    setPrompt(event.target.value);
  }
  
  const savePrompt = event => {
    event.preventDefault();
    const lockedPrompt = prompt;
    axios.post("/prompts", { prompt: lockedPrompt, temperature: temperature, engine: engine })
      .then(response => {
        console.log(response.data);
        setList(prev => [...prev, { prompt: lockedPrompt, response: response.data }]);
      })
  }

  return (
    
    <section>
      <div className="prompt-body-headings">
        <h6>
          Enter prompt
        </h6>
        <h6>
          Suggestions
        </h6>
      </div>
      <div className="prompt-body-content">
        <textarea id="prompt-input" onChange={onChange}></textarea>
        <Suggestions
          selected={selected}
          setSelected={setSelected}
          setTemperature={setTemperature}
        />
      </div>
      <button onClick={savePrompt}>Submit</button>
    </section>
    
  )

}