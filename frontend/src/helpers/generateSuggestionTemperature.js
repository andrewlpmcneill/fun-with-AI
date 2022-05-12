export const generateSuggestionTemperature = (selected, previous) => {

  switch(selected) {
    default:
      return previous;
    case "Q&A":
      return 0;
    case "Ads":
      return 0.5;
    case "Product Name":
      return 0.8;
    case "Mood to Colour":
      return 0;
    case "Micro-Horror":
      return 0.8;
    case "Essay Outline":
      return 0;
  }

}