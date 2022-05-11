import { useState } from 'react';
import ResultsList from './components/Results/index';
import Form from './components/Form';
import Upload from './components/Upload';
import Header from './components/Header'

function App() {

  const [list, setList] = useState([]);
  const [key, setKey] = useState('home');

  return (
    <div className="App">
      <Header />
      <div>
        <Upload />
        <Form
          setList={setList}
        />
      </div>
      <ResultsList
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
