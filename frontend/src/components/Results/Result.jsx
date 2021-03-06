import { useEffect } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { capitalizeEngine } from '../../helpers/capitalizeEngine';
import ImageResult from './ImageResult';

export default function Result(props) {

  const {
    prompt,
    response,
    time,
    id,
    engine,
    link,
    resultScroll
  } = props;

  // When result mounts, scroll to using its ref
  useEffect(() => {
    resultScroll.current.scrollIntoView({ behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <article
      className="article-result"
      key={id ? id[id.length - 1] : null}
    >
      <header
        className="result-header"
      >
        <p
          ref={resultScroll}
        >
          Generated by <strong>{capitalizeEngine(engine) === "Image Upload" ? <ImageResult link={link}/> : capitalizeEngine(engine)}</strong>
        </p>
        <p>
          <strong><ReactTimeAgo
            date={Number(time)}
          /></strong>
        </p>
      </header>
      <div
        className='result-body'
      >
        <h6>
          {capitalizeEngine(engine) === "Image Upload" ? "TesseractJS" : "Prompt"}
        </h6>
        <p>
          {prompt}
        </p>
      </div>
      <footer
        className="result-footer"
      >
        <h6>
        {capitalizeEngine(engine) === "Image Upload" ? "GPT-3" : "Response"}
        </h6>
        <p
          className="result-body"
        >
          {response}
        </p>
      </footer>
    </article>

  )

}