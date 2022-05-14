import { useState } from "react";
import Upload from "./Upload";
import Form from "./Form";

import Header from "./Header";

export default function Prompts(props) {

  const { setList, onMouseOver, onMouseLeave, color, setColor, loading, setLoading, engine, setEngine } = props;

  const [selected, setSelected] = useState("standard");
  const [temperature, setTemperature] = useState(0.5);
  const [id, setId] = useState([1]);

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
        />
        )}
        {selected === "image-ocr" && (
        <Upload
          id={id}
          setId={setId}
          setList={setList}
          setLoading={setLoading}
        />
        )}
    </article>

  )

}