import Navbar from "./Navbar";
import Headline from "./Headline";
import About from "./About";

export default function Header(props) {

  return (
    
    <header className="header-header">
      <Navbar />
      <Headline />
      <About />
    </header>
    
  )

}