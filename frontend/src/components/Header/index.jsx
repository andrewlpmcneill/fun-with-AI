import Navbar from "./Navbar";
import Headline from "./Headline";
import About from "./About";

export default function Header(props) {

  const { color, onMouseOver, onMouseLeave, lightenDarkenColor } = props;

  return (
    
    <header className="header-header">
      <Navbar
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
      <Headline
        color={color}
        lightenDarkenColor={lightenDarkenColor}
      />
      <About />
    </header>
    
  )

}