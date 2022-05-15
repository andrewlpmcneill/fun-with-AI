import { Fragment } from 'react';
import { lightenDarkenColor } from './helpers/lightenDarkenColor';
import usePromptData from './hooks/usePromptData';
import useResultData from './hooks/useResultData';
import useInteractionData from './hooks/useInteractionData';
import ResultsList from './components/Results/index';
import Header from './components/Header'
import Prompts from './components/Prompts/index';

function App() {

  // INTERACTION STATE AND FUNCTIONS
  const {
    color,
    setColor,
    loading,
    setLoading,
    onMouseOver,
    onMouseLeave,
    onMouseOverLink,
    onMouseLeaveLink
  } = useInteractionData();

  // PROMPT STATE AND FUNCTIONS
  const {
    engine,
    setEngine,
    selectedMode,
    setSelectedMode,
    temperature,
    setTemperature,
    selectEngine,
    selectEngineRadio,
    uploadError,
    setUploadError,
    promptError,
    setPromptError,
    prompt,
    setPrompt,
    selectedSuggestion,
    setSelectedSuggestion
  } = usePromptData();

  // RESULT STATE AND FUNCTIONS
  const {
    list,
    setList,
    id,
    setId,
    resultScroll
  } = useResultData();

  return (

    <Fragment>
      <Header
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onMouseOverLink={onMouseOverLink}
        onMouseLeaveLink={onMouseLeaveLink}
        color={color}
        lightenDarkenColor={lightenDarkenColor}
      />
      <Prompts
        setList={setList}
        engine={engine}
        setEngine={setEngine}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        color={color}
        setColor={setColor}
        loading={loading}
        setLoading={setLoading}
        selectEngine={selectEngine}
        selectEngineRadio={selectEngineRadio}
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
        temperature={temperature}
        setTemperature={setTemperature}
        id={id}
        setId={setId}
        uploadError={uploadError}
        setUploadError={setUploadError}
        promptError={promptError}
        setPromptError={setPromptError}
        prompt={prompt}
        setPrompt={setPrompt}
        selectedSuggestion={selectedSuggestion}
        setSelectedSuggestion={setSelectedSuggestion}
      />
      <ResultsList
        list={list}
        setList={setList}
        engine={engine}
        loading={loading}
        resultScroll={resultScroll}
      />
    </Fragment>

  );
}

export default App;
