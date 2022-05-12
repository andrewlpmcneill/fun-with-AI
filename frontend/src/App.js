import { useState } from 'react';
import ResultsList from './components/Results/index';
// import Form from './components/Form';
// import Upload from './components/Prompts/Upload';
import Header from './components/Header'
import Prompts from './components/Prompts/index';

function App() {

  const [list, setList] = useState([]);
  const [key, setKey] = useState('home');

  return (
    <div className="App">
      <Header />
      <Prompts setList={setList} />
      <div>
        {/* <Upload /> */}
        {/* <Form
          setList={setList}
        /> */}
      </div>
      <ResultsList
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
