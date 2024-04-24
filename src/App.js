import "./App.css";
import { Counter } from "./features/counter/counter";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Redux Example</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
