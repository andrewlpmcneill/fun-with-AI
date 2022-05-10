import { useState } from 'react';
import ResultsList from './components/Results/ResultsList';
import Form from './components/Form';
import Upload from './components/Upload';

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Fun with AI</h1>
      <Upload />
      <br/>
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
