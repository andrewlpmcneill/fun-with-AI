export default function Headline(props) {

  const {
    onMouseOverLink,
    onMouseLeaveLink
  } = props;

  return (

    <h2>
      <a
        aria-label="github personal link"
        id="headline-link"
        href="https://github.com/andrewlpmcneill"
        target="_blank"
        rel="noreferrer"
        onMouseOver={onMouseOverLink}
        onMouseLeave={onMouseLeaveLink}
      >
        Andrew McNeill
      </a>
      's submission for the Shopify Front End Developerrr Intern Challenge, May 2022.
    </h2>

  )

}