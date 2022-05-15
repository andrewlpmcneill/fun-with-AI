export default function ImageResult(props) {

  const {
    link
  } = props;

  return (

    <a
    href={link}
    target="_blank"
    rel="noreferrer"
    >
      Image Upload
    </a>

  )

}