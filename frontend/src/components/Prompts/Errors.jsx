export default function Errors(props) {

  const {
    error
  } = props;

  return (

    <>
      {error === "upload" && 
      <article
        className="alert-upload-error"
      >
        Invalid file type. Please select a .jpeg or .png file.
      </article>
      }
      {error === "empty" && 
      <article
        className="alert-prompt-error"
      >
        The prompt is empty. Please try again.
      </article>
      }
    </>

  )

}