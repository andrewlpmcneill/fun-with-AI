import Errors from "./Errors";
import Suggestions from "./Suggestions";
import { AiOutlineInfoCircle } from 'react-icons/ai';
const axios = require('axios');

export default function Form(props) {

  const {
    setList,
    temperature,
    setTemperature,
    engine,
    onMouseOver,
    onMouseLeave,
    color,
    setColor,
    loading,
    setLoading,
    id,
    setId,
    promptError,
    setPromptError,
    prompt,
    setPrompt,
    selectedSuggestion,
    setSelectedSuggestion,
  } = props;
  
  // Set prompt state, unselect suggestion button and return to app theme colour
  const onTextAreaChange = event => {

    setPrompt(event.target.value);
    const element = document.getElementById(selectedSuggestion);
    if (selectedSuggestion && color) {
      Object.assign(element.style,{ backgroundColor: color, borderColor: color, color: "white" });
      setSelectedSuggestion();
      return;
    }
    if (selectedSuggestion) {
      Object.assign(element.style,{ backgroundColor: "#1095c1", borderColor: "#1095c1", color: "white" });
      setSelectedSuggestion();
    }

  }
  
  // Initiate loading spinners and skeleton result, send prompt and settings to server
  const savePrompt = event => {

    event.preventDefault();
    // Empty form validation
    if (!prompt) {
      setPromptError(true);
      return;
    }
    setLoading(true);
    const lockedPrompt = prompt;
    axios.post("/prompts", { prompt: lockedPrompt, temperature: temperature, engine: engine })
      .then(response => {
        const answer = response.data;
        // If response is a hex code, set it to system colour
        if (answer[2] === "#" && answer.slice(2) !== "#FFF") {
          setColor(answer.slice(2));
        }
        // Update results list to trigger new result render
        setList(prev => [...prev, { prompt: lockedPrompt, response: response.data, time: Date.now(), id: id, engine: engine }]);
        setLoading(false);
        setId(prev => [...prev, prev[prev.length - 1] + 1]);
      })
      
  }

  return (
    
    <section>
      <div
        className="prompt-headings"
      >
        <div
          className="section-header-left"
        >
          <div
            className="modes"
          >
            <h6>
              Enter prompt
            </h6>
            <div
              className="tooltip"
              data-tooltip="Enter text to generate responses"
            >
              <AiOutlineInfoCircle
                className="tooltip"
                style={{marginBottom: "4px"}}
              />
            </div>
          </div>
          <textarea
            id="prompt-input"
            onChange={onTextAreaChange}
          />
          <button
            id="submit"
            onClick={savePrompt}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            aria-busy={loading ? "true" : "false"}
          >
            {loading ? "" : "Submit"}
          </button>
        </div>
        <div
          className="section-header-right"
        >
          <div
            className="modes"
          >
            <h6>
              Suggestions
            </h6>
            <div
              className="tooltip"
              data-tooltip="Use a pre-made prompt"
            >
              <AiOutlineInfoCircle
                className="tooltip"
                style={{marginBottom: "4px"}}
              />
            </div>
          </div>
          <div
            className="prompt-body-content"
          >
            <Suggestions
              selectedSuggestion={selectedSuggestion}
              setSelectedSuggestion={setSelectedSuggestion}
              setTemperature={setTemperature}
              color={color}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            />
          </div>
          {promptError && <Errors error="empty"/>}
        </div>
      </div>
    </section>
    
  )

}