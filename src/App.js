import logo from "./logo.svg";
import "./App.css";
import Flagle from "./Flagle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>FLAGLE</h2>
        {/* This custom component will hold all the functionality related to our Users */}
        <Flagle />
      </header>
    </div>
  );
}

export default App;
