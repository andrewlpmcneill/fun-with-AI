export const generateTemplatePrompt = selected => {

  let value = "";

  switch(selected) {
    default:
      break;
    case "Q&A":
      value = "Q: What is human life expectancy in the United States?"
      document.getElementById("prompt-input").value = value;
      return value;
    case "Ads":
      value = "Write a creative ad for the following product to run on Facebook aimed at parents:\n\nProduct: Learning Room is a virtual environment to help students from kindergarten to high school excel in school.";
      document.getElementById("prompt-input").value = value;
      return value;
    case "Product Name":
      value = "Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: A pair of shoes that can fit any foot size.\nSeed words: adaptable, fit, omni-fit.";
      document.getElementById("prompt-input").value = value;
      return value;
    case "Mood to Colour":
      value = "The CSS code for a color like a blue sky at dusk:";
      document.getElementById("prompt-input").value = value;
      return value;
    case "Micro-Horror":
      value = "Topic: Breakfast\nTwo-Sentence Horror Story: He always stops crying when I pour the milk on his cereal. I just have to remember not to let him see his face on the carton.\n    \nTopic: Wind\nTwo-Sentence Horror Story:";
      document.getElementById("prompt-input").value = value;
      return value;
    case "Essay Outline":
      value = "Create an outline for an essay about Nikola Tesla and his contributions to technology:";
      document.getElementById("prompt-input").value = value;
      return value;
  }
}