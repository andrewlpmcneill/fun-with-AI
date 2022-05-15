export default function Suggestions(props) {

  const {
    selectedSuggestion,
    setSelectedSuggestion,
    color,
    onMouseOver,
    onMouseLeave
  } = props;

  const onSuggestionClick = event => {
    
    // User clicks suggestion that is already selected
    if (selectedSuggestion === event.target.value) {
      // Release selection
      setSelectedSuggestion();
      // Change colour to match system setting
      event.target.style.backgroundColor = color || "#1095c1";
      // If there is a non-default colour theme applied, extra styling is requirted
      if (!color) {
        event.target.style.borderColor = "#1095c1";
        event.target.style.color = "white";
      }
      return;
    }
    // Another suggestion has been previously selected and needs to be released
    if (selectedSuggestion) {
      const element = document.getElementById(selectedSuggestion);
      if (color) {
        Object.assign(element.style,{ backgroundColor: color, borderColor: color, color: "white" });
      }
      else {
        Object.assign(element.style,{ backgroundColor: "#1095c1", borderColor: "#1095c1", color: "white" });
      }
    }
    // Set new selected suggestion and style it white
    setSelectedSuggestion(event.target.value);
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.borderColor = "white";
  }

  return ( 
    
    <div
      className="suggestions"
    >
      <div
        className="suggestions-row-1 grid"
      >
        <button
          value="Q&A"
          id="Q&A"
          className={selectedSuggestion === "Q&A" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onSuggestionClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Q&A</button>
        <button
          value="Ads"
          id="Ads"
          className={selectedSuggestion === "Ads" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onSuggestionClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Ads</button>
        <button
          value="Product Name"
          id="Product Name"
          className={selectedSuggestion === "Product Name" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onSuggestionClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Product Name</button>
      </div>
      <div
        className="suggestions-row-2 grid"
      >
        <button
          value="Mood to Colour"
          id="Mood to Colour"
          className={selectedSuggestion === "Mood to Colour" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onSuggestionClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Mood to Colour</button>
        <button
          value="Micro-Horror"
          id="Micro-Horror"
          className={selectedSuggestion === "Micro-Horror" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onSuggestionClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Micro-Horror</button>
        <button
          value="Essay Outline"
          id="Essay Outline"
          className={selectedSuggestion === "Essay Outline" ? "suggestion-button suggestion-selected" : "suggestion-button"}
          onClick={onSuggestionClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >Essay Outline</button>
      </div>
    </div>
    
  )

}