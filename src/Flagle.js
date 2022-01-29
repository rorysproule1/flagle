import React, { useState, useEffect } from "react";
import { getCountryList } from "./CountryList";
import flag from "./yemen.png"

export default function Flagle() {

  const countryList = getCountryList();
  const correctCountry = "Yemen"

  const [guess, setGuess] = useState();
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function makeGuess() {
    if (!guess) {
      alert("You have to make a guess!");
    } else if (countryList.includes(guess)) {
      if (guess == correctCountry) {
        alert("You guessed the correct country!");
      } else {
        setAttempts(attempts + 1)
        if (attempts == 5) {
          setGameOver(true);
          alert(`GAME OVER! You've ran out of attempts. The correct answer was ${correctCountry}.`)
        }
      }
    } else {
      alert("That country doesn't exist!")
    }
  }

  const divStyle = {
    marginRight: "10px",
  };

  const divStyle1 = {
    fontSize: "60%",
  };

  return (
    <React.Fragment>
      <img src={flag}/>
      <br />
      <input
        type="text"
        id="guess"
        name="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <div>
         <button onClick={(e) => makeGuess()} disabled={gameOver} style={divStyle}>Guess</button>
         <button onClick={(e) => setGuess("")} disabled={gameOver}>Clear</button>
      </div>
      <br/>
      <div>
        <b>Attempts: {attempts}</b>
        <br/>
        <div style={divStyle1}>
          Test
        </div>
      </div>
       
      
      
    </React.Fragment>
  );
}
