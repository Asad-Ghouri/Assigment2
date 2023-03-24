import logo from "./logo.svg";
import "./App.css";
import { HellowWorld } from "./components/HellowWorld/HellowWorld";
import { Counter } from "./components/Counter/Counter";
function App() {
  return (
    <div className="App">
      <HellowWorld />
      <Counter />
    </div>
  );
}

export default App;
