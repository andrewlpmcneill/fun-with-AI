import { toggleModal } from "../../helpers/toggleAboutModal";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar(props) {

  const { onMouseOver, onMouseLeave } = props;

  return (

    <nav
      className="nav-header"
    >
      <h1>
        Fun with AI
      </h1>
      <div
        className="nav-links"
      >
        <button
          aria-label="about page link"
          id="about-link"
          className="button-override-link"
          data-target="modal-about"
          onClick={toggleModal}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          About
        </button>
        <a
          aria-label="github repository link"
          href="https://github.com/andrewlpmcneill/shopify-frontend-intern-challenge"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            className="fa-icon"
          />
        </a>
        <a
          aria-label="linkedin personal link"
          href="https://www.linkedin.com/in/andrewlpmcneill/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="fa-icon linkedin"
          />
        </a>
      </div>
    </nav>

  )

}