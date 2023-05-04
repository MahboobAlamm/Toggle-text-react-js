import "./styles.css";
import Child from "./Child";
import { useState } from "react";

export default function App() {
  const [stat, setStat] = useState(false);
  return (
    <div className="App">
      {stat ? <Child /> : null}
      <button onClick={() => setStat(!stat)}>Toggle Text</button>
    </div>
  );
}
