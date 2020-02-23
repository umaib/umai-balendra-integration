import React, {useEffect} from "react";
import logo from "./logo.svg";
import Card from '@material-ui/core/Card';
import "./App.css";

function App() {

  // const useStyles = makeStyles({
  //   pos: {
  //     marginBottom: 12,
  //   }
  // });

  async function api_example() {
    const response = await fetch("http://localhost:3000/favorites", {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    });
    let responseJson = await response.json();
    console.log(responseJson);

    //var temp = JSON.parse(responseJson);
    //console.log(temp);

    //NOTE: --------------------------------
    //Spent more than an hour trying to figure out why 
    //my output while parsing the responseJson always showed
    //undefined. This is how I was trying to access the title of the first book:
    //alert(responseJson.favorite['Books'][0].title);

    //temporary display fix:
    document.getElementById("displayText").innerHTML = JSON.stringify(responseJson);
          
  }

  useEffect(() => {
    api_example();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My name is Umai</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <marquee>Hi, I left some notes at Line 26 of frontend's App.js</marquee>
        <img src="postmanProgress.png"
        alt-text="incase the image doesn't load, it shows my Postman progress for this 
        project" height="150" width="250"/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <Card><p id="displayText"></p></Card> {/* Material UI Card element */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
