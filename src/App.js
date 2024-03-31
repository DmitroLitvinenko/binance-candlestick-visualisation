import { generateRandomSignals } from "./utils/randomSignalsGenerator";

function App() {
  return (
    <div>
      <button onClick={() => console.dir(generateRandomSignals(1))}>
        Generate
      </button>
    </div>
  );
}

export default App;
