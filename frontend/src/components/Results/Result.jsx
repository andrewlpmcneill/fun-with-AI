export default function Result(props) {

  const {prompt, response} = props;

  return (

    <div>
      <p>Prompt: {prompt}</p>
      <p>Response: {response}</p>
    </div>

  )

}