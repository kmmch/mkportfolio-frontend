import { useState } from "react";
import { Pra1 } from "./ practice/pra1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React + Vite</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Pra1 />
    </>
  );
}

export default App;
