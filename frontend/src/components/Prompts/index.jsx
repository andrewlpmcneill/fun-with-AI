import { useState } from "react";
import Upload from "./Upload";
import Form from "./Form";

import Header from "./Header";

export default function Prompts(props) {

  const { setList, onMouseOver, onMouseLeave, color, setColor, loading, setLoading } = props;

  const [selected, setSelected] = useState("standard");
  const [temperature, setTemperature] = useState(0.5);
  const [engine, setEngine] = useState("curie");

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
        />
        )}
        {selected === "image-ocr" && (
        <Upload />
        )}
      <footer>
      </footer>
    </article>

  )

}