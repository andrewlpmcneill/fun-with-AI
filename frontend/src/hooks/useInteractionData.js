import { useState, useEffect } from "react";
import { lightenDarkenColor } from "../helpers/lightenDarkenColor";

export default function useInteractionData() {

  // (String Hex Code) App colour theme state, set automatically by GPT-3 prompt for hex codes of colours in responses
  const [color, setColor] = useState();
  // (Boolean) Submission loading state, used for spinners and skeleton results
  const [loading, setLoading] = useState(false);

  // IDs of pre-made prompts
  const elements = ["Q&A", "Ads", "Product Name", "Micro-Horror", "Essay Outline"];

  // Overrides default hover colour behavior of link (lightens)
  const onMouseOverLink = event => {
    
    color ? event.target.style.color = lightenDarkenColor(color, 20) : event.target.style.color = lightenDarkenColor("#1095c1", 20);

  }

  // Returns link to original colour after mouse hover leave
  const onMouseLeaveLink = event => color ? event.target.style.color = color : event.target.style.color = "#1095c1";

  // Overrides default hover colour behaviour of suggestion button (lightens), except if the button is selected
  const onMouseOver = event => {

    if (!event.target.className.includes('suggestion-selected')) {
      color ? event.target.style.backgroundColor = lightenDarkenColor(color, 20) : event.target.style.backgroundColor = lightenDarkenColor("#1095c1", 20);
    }
  
  }

  // Returns suggestion button to original colour after mouse hover leave
  const onMouseLeave = event => {

    if (!event.target.className.includes('suggestion-selected')) {
      color ? event.target.style.backgroundColor = color : event.target.style.backgroundColor = "#1095c1";
    }
  
  }

  // Manuallly changes color of elements when colour state is updated
  useEffect(() => {

    if (color) {
      document.documentElement.style.setProperty('--primary', color);
      document.getElementById("about-link").style.setProperty('color', color);
      elements.forEach(button => {
        document.getElementById(button).style.setProperty('background-color', color)
        document.getElementById(button).style.setProperty('border-color', color);
      })
      document.getElementById("headline-link").style.setProperty('color', color);
    }
  
  }, [color])

  return {
    color,
    setColor,
    loading,
    setLoading,
    onMouseOver,
    onMouseLeave,
    onMouseOverLink,
    onMouseLeaveLink,
  }

}