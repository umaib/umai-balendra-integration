import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  async function api_example() {
    const response = await fetch("http://localhost:3000/favorites", {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    });
    let responseJson = await response.json();
    console.log(responseJson);
  }

  useEffect(() => {
    api_example();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
