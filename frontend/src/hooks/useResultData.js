import { useState, useRef } from "react";

export default function useResultData() {

  // (Array) List of response/result cards
  const [list, setList] = useState([]);
  // (Array) List of unique keys for responses/results
  const [id, setId] = useState([1]);
  // Inserted into each new response/result, as a reference point for automatic scrolling
  const resultScroll = useRef(null);

  return {
    list,
    setList,
    id,
    setId,
    resultScroll
  }

}