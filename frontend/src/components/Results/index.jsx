import Result from "./Result";

export default function ResultsList(props) {

  const { list } = props;

  return (
    <ul>
      {list.map(result => (
        <Result
          prompt={result.prompt}
          response={result.response}
        />
      ))}
    </ul>
  )

}