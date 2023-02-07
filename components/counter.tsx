import React, {useEffect, useState} from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

  return (
    <>
        <button onClick={() => setCount(count + 1)}> you clicked {count} times </button>
    </>
  )
}
