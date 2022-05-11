import { toggleModal } from "../../helpers/toggleAboutModal";

export default function About(props) {

  return (
  
    <dialog
      id="modal-about"
    >
      <article>
        <button
          href="#"
          aria-label="Close"
          className="close"
          data-target="modal-about"
          onClick={toggleModal}>
        </button>
        <h1>
          This app includes:
        </h1>
        <ul>
          <li>
            <p>
              <a
                href="https://openai.com/api/"
                target="_blank"
                rel="noreferrer"
              >
                OpenAI's GPT-3 API
              </a>
              &nbsp;for processing prompts and cleaning up OCR passes
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://github.com/expressjs/multer"
                target="_blank"
                rel="noreferrer"
              >
                Multer middleware
              </a>
              &nbsp;for uploading files
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://apidocs.imgur.com/"
                target="_blank"
                rel="noreferrer"
              >
                imgur's API
              </a>
              &nbsp;for anonymous image hosting
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://tesseract.projectnaptha.com/"
                target="_blank"
                rel="noreferrer"
              >
                TesseractJS's library
              </a>
              &nbsp;for optical character recognition
            </p>
          </li>
        </ul>
        <footer>
          <button
            class="secondary"
            data-target="modal-about"
            onClick={toggleModal}
          >
            Close
          </button>
        </footer>
      </article>
    </dialog>

  )

}