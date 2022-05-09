import { useState } from 'react';
import ResultsList from './components/Results/ResultsList';
import Form from './components/Form';

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Fun with AI</h1>
      <Form
        setList={setList}
      />
      <ResultsList
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
