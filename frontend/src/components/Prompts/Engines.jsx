import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Engines(props) {

  const { engine, setEngine } = props;

  return (

    <div className='article-header-controls-engine'>
      <div className="modes">
        <h6>
          Engine
        </h6>
        <div className="tooltip" data-tooltip="Choose your GPT-3 model">
          <AiOutlineInfoCircle className="tooltip" style={{marginBottom: "4px"}} />
        </div>
      </div>
      <select
        aria-label="gpt3 engine select"
        id="engines-select"
        onChange={event => setEngine(event.target.value)}
      >
        <option
          value="davinci"
        >
          Davinci
        </option>
        <option
          value="curie"
          selected="selected"
        >
          Curie
        </option>
        <option
          value="babbage"
        >
          Babbage
        </option>
        <option
          value="ada"
        >
          Ada
        </option>
      </select>
      <div
        className="article-header-controls-engine-row"
        onChange={event => {
          const value = event.target.value;
          setEngine(value);
          document.getElementById('engines-select').value = value;
        }}
      >
        <div>
          <input
            aria-label="gpt3 davinci engine select"
            type="radio"
            id="davinci"
            name="engine"
            value="davinci"
            checked={engine === "davinci" ? true : false}
            readOnly
          />
          <label
            className="engine-heading"
            data-tooltip="Most capable, but slowest"
            htmlFor="davinci"
          >
            Davinci
          </label>
        </div>
        <div>
          <input
            aria-label="gpt3 curie engine select"
            type="radio"
            id="curie"
            name="engine"
            value="curie"
            checked={engine === "curie" ? true : false}
            readOnly
          />
          <label
            className="engine-heading"
            htmlFor="curie"
            data-tooltip="Balanced between capability and speed"
          >
            Curie
          </label>
        </div>
      </div>
      <div
        className="article-header-controls-engine-row"
        onChange={event => {
          const value = event.target.value;
          setEngine(value);
          document.getElementById('engines-select').value = value;
        }}
      >
        <div>
          <input
            aria-label="gpt3 babbage engine select"
            type="radio"
            id="babbage"
            name="engine"
            value="babbage"
            checked={engine === "babbage" ? true : false}
            readOnly
          />
          <label
            className="engine-heading"
            id="babbage-label"
            htmlFor="babbage"
            data-tooltip="Very fast at straightforward tasks"
          >
            Babbage
          </label>
        </div>
        <div>
          <input
            aria-label="gpt3 ada engine select"
            type="radio"
            id="ada"
            name="engine"
            value="ada"
            checked={engine === "ada" ? true : false}
            readOnly
          />
          <label
            className="engine-heading"
            htmlFor="davinci"
            data-tooltip="Fastest, but only for simple tasks"
          >
            Ada
          </label>
        </div>
      </div>
    </div>

  )

}