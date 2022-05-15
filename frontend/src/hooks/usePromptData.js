import { useState, useEffect } from "react";
import { generateTemplatePrompt } from "../helpers/generateTemplatePrompt";
import { generateSuggestionTemperature } from "../helpers/generateSuggestionTemperature";

export default function usePromptData() {

  // (String) Selected GPT-3 engine
  const [engine, setEngine] = useState("curie");
  // (String) Either standard or image-ocr
  const [selectedMode, setSelectedMode] = useState("standard");
  // (String) Selected pre-made prompt
  const [selectedSuggestion, setSelectedSuggestion] = useState();
  // (Number, 0 to 1) Desired prompt temperature, pre-set on pre-made prompts
  const [temperature, setTemperature] = useState(0.5);
  // (Boolean) Form validation for prompts 
  const [promptError, setPromptError] = useState(false);
  // (Boolean) Form validation for image uploads
  const [uploadError, setUploadError] = useState(false);
  // (String) Current textarea input value
  const [prompt, setPrompt] = useState('');

  // For engine dropdown select (mobile only)
  const selectEngine = event => setEngine(event.target.value);

  // For engine radio select
  const selectEngineRadio = event => {

    const value = event.target.value;
    setEngine(value);
    document.getElementById('engines-select').value = value;

  }

  // Populates textarea with pre-made prompt, sets temperature to pre-set
  useEffect(() => {

    setPrompt(generateTemplatePrompt(selectedSuggestion));
    setTemperature(generateSuggestionTemperature(selectedSuggestion, temperature))
  
  }, [selectedSuggestion])

  return {
    engine,
    setEngine,
    selectedMode,
    setSelectedMode,
    temperature,
    setTemperature,
    uploadError,
    setUploadError,
    promptError,
    setPromptError,
    selectEngine,
    selectEngineRadio,
    prompt,
    setPrompt,
    selectedSuggestion,
    setSelectedSuggestion,
  };

}