import { useState, useEffect } from "react";
import { generateTemplatePrompt } from "../../helpers/generateTemplatePrompt";
import { generateSuggestionTemperature } from "../../helpers/generateSuggestionTemperature";
import Suggestions from "./Suggestions";
import { AiOutlineInfoCircle } from 'react-icons/ai';
const axios = require('axios');

export default function Form(props) {

  const { setList, temperature, setTemperature, engine, onMouseOver, onMouseLeave, color, setColor, loading, setLoading, id, setId } = props;
  
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
    if (selected && color) {
      document.getElementById(selected).style.backgroundColor = color;
      document.getElementById(selected).style.borderColor = color;
      document.getElementById(selected).style.color = "white";
      setSelected();
      return;
    }
    if (selected) {
      document.getElementById(selected).style.backgroundColor = "#1095c1";
      document.getElementById(selected).style.borderColor = "#1095c1";
      document.getElementById(selected).style.color = "white";
      setSelected();
    }
  }
  
  const savePrompt = event => {
    event.preventDefault();
    setLoading("true");
    const lockedPrompt = prompt;
    axios.post("/prompts", { prompt: lockedPrompt, temperature: temperature, engine: engine })
      .then(response => {
        console.log(response.data);
        const answer = response.data;
        if (answer[2] === "#" && answer.slice(2) !== "#FFF") {
          setColor(answer.slice(2));
        }
        setList(prev => [...prev, { prompt: lockedPrompt, response: response.data, time: Date.now(), id: id, engine: engine }]);
        setLoading("false");
        setId(prev => [...prev, prev[prev.length - 1] + 1]);
        console.log(id);
      })
  }

  return (
    
    <section>
      <div className="prompt-headings">
        <div className="section-header-left">
          <div className="modes">
            <h6>
              Enter prompt
            </h6>
            <div className="tooltip" data-tooltip="Enter text to generate responses">
              <AiOutlineInfoCircle className="tooltip" style={{marginBottom: "4px"}} />
            </div>
          </div>
          <textarea id="prompt-input" onChange={onChange}></textarea>
          <button
            id="submit"
            onClick={savePrompt}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            aria-busy={loading}
          >
            {loading === "true" ? "" : "Submit"}
          </button>
        </div>
        <div className="section-header-right">
          <div className="modes">
            <h6>
              Suggestions
            </h6>
            <div className="tooltip" data-tooltip="Use a pre-made prompt">
              <AiOutlineInfoCircle className="tooltip" style={{marginBottom: "4px"}} />
            </div>
          </div>
          <div className="prompt-body-content">
            <Suggestions
              selected={selected}
              setSelected={setSelected}
              setTemperature={setTemperature}
              color={color}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </div>
      </div>
    </section>
    
  )

}