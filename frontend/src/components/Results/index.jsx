import Skeleton from "./Skeleton";
import Result from "./Result";

export default function ResultsList(props) {

  const { list, loading } = props;

  return (
    <ul
      className="results-list"
    >
      {loading === "true" && <Skeleton />}
      {[...list].reverse().map(result => (
        <Result
          prompt={result.prompt}
          response={result.response}
          time={result.time}
          key={result.id}
          engine={result.engine}
          link={result.link}
        />
      ))}
    </ul>
  )

}