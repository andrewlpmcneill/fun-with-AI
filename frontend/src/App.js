import { Fragment, useRef, useState } from 'react';
import { lightenDarkenColor } from './helpers/lightenDarkenColor';
import ResultsList from './components/Results/index';
import Header from './components/Header'
import Prompts from './components/Prompts/index';

function App() {

  const [list, setList] = useState([]);
  const [color, setColor] = useState();
  const [loading, setLoading] = useState("false");
  const [engine, setEngine] = useState("curie");
  const resultScroll = useRef(null);

  const onMouseOver = event => {
    if (!event.target.className.includes('suggestion-selected')) {
      color ? event.target.style.backgroundColor = lightenDarkenColor(color, 20) : event.target.style.backgroundColor = lightenDarkenColor("#1095c1", 20);
    }
  }

  const onMouseLeave = event => {
    if (!event.target.className.includes('suggestion-selected')) {
      color ? event.target.style.backgroundColor = color : event.target.style.backgroundColor = "#1095c1";
    }
  }

  return (

    <Fragment>
      <Header
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
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
