import Engines from './Engines';
import Slider from 'rc-slider';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Header(props) {

  const {selected, setSelected, temperature, setTemperature, engine, setEngine} = props;

  return (

    <header
      className="article-header"
    >
      <div className="article-header-left">
        <div className="modes">
          <h6>
            Modes
          </h6>
          <div className="tooltip" data-tooltip="GPT-3 text prompts or image text extraction">
            <AiOutlineInfoCircle className="tooltip" style={{marginBottom: "4px"}} />
          </div>
        </div>
        <div
          className="article-header-modes"
        >
          <button
            className={selected === "standard" ? "prompts-tab contrast" : "prompts-tab secondary"}
            onClick={() => setSelected("standard")}
          >
            Standard Prompts
          </button>
          <button
            className={selected === "image-ocr" ? "prompts-tab contrast" : "prompts-tab secondary"}
            onClick={() => setSelected("image-ocr")}
          >
            Image OCR Mode
          </button>
        </div>
      </div>
      <div
        className="article-header-right"
      >
        <Engines
          engine={engine}
          setEngine={setEngine}
        />
        <div
          className="article-header-controls-temperature"
          >
          <div className="modes">
            <h6>
              Temperature
            </h6>
            <div className="tooltip" data-tooltip="Controls randomness of output">
              <AiOutlineInfoCircle className="tooltip" style={{marginBottom: "4px"}} />
            </div>
          </div>
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