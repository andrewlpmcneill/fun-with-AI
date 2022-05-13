import Slider from 'rc-slider';

export default function Header(props) {

  const {selected, setSelected, temperature, setTemperature, engine, setEngine} = props;

  return (

    <header
      className="article-header"
    >
      <div className="article-header-left">
        <h6>
          Modes
        </h6>
        <div
          className="article-header-modes"
        >
          <button
            className={selected === "standard" ? "prompts-tab contrast" : "prompts-tab secondary"}
            onClick={() => setSelected("standard")}
            data-tooltip="Query GPT-3 yourself"
          >
            Standard Prompts
          </button>
          <button
            className={selected === "image-ocr" ? "prompts-tab contrast" : "prompts-tab secondary"}
            onClick={() => setSelected("image-ocr")}
            data-tooltip="Retrieve text from an image"
          >
            Image OCR Mode
          </button>
        </div>
      </div>
      <div
        className="article-header-right"
      >
        <div className='article-header-controls-engine'>
          <h6>
            Engine
          </h6>
          <div
            className="article-header-controls-engine-row"
            onChange={event => setEngine(event.target.value)}
          >
            <div>
              <input
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
            onChange={event => setEngine(event.target.value)}
          >
            <div>
              <input
                type="radio"
                id="babbage"
                name="engine"
                value="babbage"
                checked={engine === "babbage" ? true : false}
                readOnly
              />
              <label
                className="engine-heading"
                htmlFor="babbage"
                data-tooltip="Very fast at straightforward tasks"
              >
                Babbage
              </label>
            </div>
            <div>
              <input
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
        <div
          className="article-header-controls-temperature"
          >
          <h6>
            Temperature
          </h6>
          <Slider
            value={temperature}
            min={0}
            max={1}
            step={0.1}
            onChange={value => setTemperature(value)}
            style={{ width: "85%"}}
            />
          <h6>
            {temperature}
          </h6>
        </div>
      </div>
    </header>

  )

}