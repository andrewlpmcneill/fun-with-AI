import Upload from "./Upload";
import Form from "./Form";
import Header from "./Header";

export default function Prompts(props) {

  const {
    setList,
    onMouseOver,
    onMouseLeave,
    color,
    setColor,
    loading,
    setLoading,
    engine,
    selectEngine,
    selectEngineRadio,
    selectedMode,
    setSelectedMode,
    temperature,
    setTemperature,
    id,
    setId,
    uploadError,
    setUploadError,
    promptError,
    setPromptError,
    prompt,
    setPrompt,
    selectedSuggestion,
    setSelectedSuggestion
  } = props;

  return (

    <article>
      <Header
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
        temperature={temperature}
        setTemperature={setTemperature}
        engine={engine}
        selectEngine={selectEngine}
        selectEngineRadio={selectEngineRadio}
      />
        {selectedMode === "standard" && (
        <Form
          setList={setList}
          temperature={temperature}
          setTemperature={setTemperature}
          engine={engine}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          color={color}
          setColor={setColor}
          loading={loading}
          setLoading={setLoading}
          id={id}
          setId={setId}
          promptError={promptError}
          setPromptError={setPromptError}
          prompt={prompt}
          setPrompt={setPrompt}
          selectedSuggestion={selectedSuggestion}
          setSelectedSuggestion={setSelectedSuggestion}
        />
        )}
        {selectedMode === "image-ocr" && (
        <Upload
          id={id}
          setId={setId}
          setList={setList}
          loading={loading}
          setLoading={setLoading}
          uploadError={uploadError}
          setUploadError={setUploadError}
        />
        )}
    </article>

  )

}