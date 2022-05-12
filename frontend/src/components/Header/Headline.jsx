export default function Headline(props) {

  const { color, lightenDarkenColor } = props;

  const onMouseOverLink = event => {
    color ? event.target.style.color = lightenDarkenColor(color, 20) : event.target.style.color = lightenDarkenColor("#1095c1", 20);
  }

  const onMouseLeaveLink = event => {
    color ? event.target.style.color = color : event.target.style.color = "#1095c1";
  }

  return (

    <h2>
      <a
        id="headline-link"
        href="https://github.com/andrewlpmcneill"
        target="_blank"
        rel="noreferrer"
        onMouseOver={onMouseOverLink}
        onMouseLeave={onMouseLeaveLink}
      >
        Andrew McNeill
      </a>
      's submission for the Shopify Front End Developer Intern Challenge, May 2022.
    </h2>

  )

}