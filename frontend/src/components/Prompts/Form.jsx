import { useState, useEffect } from "react";
import { generateTemplatePrompt } from "../../helpers/generateTemplatePrompt";
import { generateSuggestionTemperature } from "../../helpers/generateSuggestionTemperature";
import Suggestions from "./Suggestions";
const axios = require('axios');

export default function Form(props) {

  const { setList, temperature, setTemperature, engine, onMouseOver, onMouseLeave, color, setColor } = props;
  const [prompt, setPrompt] = useState('');
  const [selected, setSelected] = useState();
  const elements = ["Q&A", "Ads", "Product Name", "Micro-Horror", "Essay Outline"]

  useEffect(() => {
    setPrompt(generateTemplatePrompt(selected));
    setTemperature(generateSuggestionTemperature(selected, temperature))
  }, [selected])

  useEffect(() => {
    if (color) {
      document.documentElement.style.setProperty('--primary', color);
      document.getElementById("about-link").style.setProperty('color', color);
      elements.forEach(button => {
        document.getElementById(button).style.setProperty('background-color', color)
        document.getElementById(button).style.setProperty('border-color', color);
      })
      document.getElementById("headline-link").style.setProperty('color', color);
    }
  }, [color])

  const onChange = event => {
    setPrompt(event.target.value);
  }
  
  const savePrompt = event => {
    event.preventDefault();
    const lockedPrompt = prompt;
    axios.post("/prompts", { prompt: lockedPrompt, temperature: temperature, engine: engine })
      .then(response => {
        console.log(response.data);
        const answer = response.data;
        if (answer[2] === "#") {
          setColor(answer.slice(2));
        }
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
          color={color}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
      </div>
      <button
        onClick={savePrompt}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        Submit
      </button>
    </section>
    
  )

}