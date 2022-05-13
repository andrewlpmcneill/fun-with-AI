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
      value = "Product description: A website that uses an AI model to provide answers.\nSeed words: AI, internship, application.\nProduct names:";
      document.getElementById("prompt-input").value = value;
      return value;
    case "Mood to Colour":
      const roll = Math.floor((Math.random() * 6) + 1);
      switch(roll) {
        default:
          value = "The hex code for a color like a sunset on the beach:";
          break;
        case 1:
          value = "The hex code for a color like a Martian sunset:";
          break;
        case 2:
          value = "The hex code for a color like a firetruck:";
          break;
        case 3:
          value = "The hex code for a color like New England:";
          break;
        case 4:
          value = "The hex code for a random color but not white:";
          break;
        case 5:
          value = "The hex code for a color like the ocean:";
          break;
        case 6:
          value = "The hex code for a color like a canary:";
          break;
      }
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