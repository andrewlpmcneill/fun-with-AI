import { useState } from "react";
import Upload from "./Upload";
import Form from "./Form";

import Header from "./Header";

export default function Prompts(props) {

  const { setList, onMouseOver, onMouseLeave, color, setColor, loading, setLoading, engine, setEngine } = props;

  const [selected, setSelected] = useState("standard");
  const [temperature, setTemperature] = useState(0.5);
  const [id, setId] = useState([1]);
  const [uploadError, setUploadError] = useState(false);
  const [promptError, setPromptError] = useState(false);

  return (

    <article>
      <Header
        selected={selected}
        setSelected={setSelected}
        temperature={temperature}
        setTemperature={setTemperature}
        engine={engine}
        setEngine={setEngine}
      />
        {selected === "standard" && (
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
        />
        )}
        {selected === "image-ocr" && (
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