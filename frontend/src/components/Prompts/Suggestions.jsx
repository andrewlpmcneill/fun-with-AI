import { lightenDarkenColor } from "../../helpers/lightenDarkenColor";

export default function Suggestions(props) {

  const { selected, setSelected, color, onMouseOver, onMouseLeave } = props;

  const onClick = event => {
    if (selected === event.target.value) {
      setSelected();
      event.target.style.backgroundColor = color || "#1095c1";
      if (!color) {
        event.target.style.borderColor = "#1095c1";
        event.target.style.color = "white";
      }
      return;
    }
    if (selected) {
      console.log(selected);
      console.log(document.getElementById(selected).style.backgroundColor);
      if (color) {
        document.getElementById(selected).style.backgroundColor = color;
        document.getElementById(selected).style.borderColor = color;
        document.getElementById(selected).style.color = "white";
      }
      else {
        document.getElementById(selected).style.backgroundColor = "#1095c1";
        document.getElementById(selected).style.borderColor = "#1095c1";
        document.getElementById(selected).style.color = "white";
      }
    }
    setSelected(event.target.value);
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.borderColor = "white";
  }

  return ( 
    
    <div
      className="suggestions"
    >
      <div
        className="suggestions-row-1"
      >
        <button
          value="Q&A"
          id="Q&A"
          className={selected === "Q&A" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Q&A</button>
        <button
          value="Ads"
          id="Ads"
          className={selected === "Ads" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Ads</button>
        <button
          value="Product Name"
          id="Product Name"
          className={selected === "Product Name" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Product Name</button>
      </div>
      <div
        className="suggestions-row-2"
      >
        <button
          value="Mood to Colour"
          id="Mood to Colour"
          className={selected === "Mood to Colour" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Mood to Colour</button>
        <button
          value="Micro-Horror"
          id="Micro-Horror"
          className={selected === "Micro-Horror" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Micro-Horror</button>
        <button
          value="Essay Outline"
          id="Essay Outline"
          className={selected === "Essay Outline" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Essay Outline</button>
      </div>
    </div>
    
  )

}