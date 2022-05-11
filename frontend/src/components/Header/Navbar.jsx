import { toggleModal } from "../../helpers/toggleAboutModal";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar(props) {

  return (

    <div
      className="nav"
    >
      <h1>
        Fun with AI
      </h1>
      <div
        className="nav-links"
      >
        <button
          className="button-override-link"
          data-target="modal-about"
          onClick={toggleModal}
        >
          About
        </button>
        <a
          href="https://github.com/andrewlpmcneill/shopify-frontend-intern-challenge"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            className="fa-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andrewlpmcneill/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="fa-icon linkedin"
          />
        </a>
      </div>
    </div>

  )

}