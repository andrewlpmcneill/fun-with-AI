import Navbar from "./Navbar";
import Headline from "./Headline";
import About from "./About";

export default function Header(props) {

  const {
    color,
    onMouseOver,
    onMouseLeave,
    onMouseOverLink,
    onMouseLeaveLink,
    lightenDarkenColor
  } = props;

  return (
    
    <header className="header-header">
      <Navbar
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
      <Headline
        color={color}
        onMouseOverLink={onMouseOverLink}
        onMouseLeaveLink={onMouseLeaveLink}
        lightenDarkenColor={lightenDarkenColor}
      />
      <About />
    </header>
    
  )

}