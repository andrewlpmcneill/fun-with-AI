export default function Suggestions(props) {

  const { selected, setSelected } = props;

  const onClick = event => {
    selected === event.target.value ? setSelected() : setSelected(event.target.value);
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
          className={selected === "Q&A" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
        >Q&A</button>
        <button
          value="Ads"
          className={selected === "Ads" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
        >Ads</button>
        <button
          value="Product Name"
          className={selected === "Product Name" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
        >Product Name</button>
      </div>
      <div
        className="suggestions-row-2"
      >
        <button
          value="Mood to Colour"
          className={selected === "Mood to Colour" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
        >Mood to Colour</button>
        <button
          value="Micro-Horror"
          className={selected === "Micro-Horror" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
        >Micro-Horror</button>
        <button
          value="Essay Outline"
          className={selected === "Essay Outline" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onClick}
        >Essay Outline</button>
      </div>
    </div>
    
  )

}