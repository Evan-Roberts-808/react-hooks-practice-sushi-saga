import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [ sushi, setSushi ] = useState([])
  const [ wallet, setWallet ] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(sushi => {
      const updatedSushi = sushi.map((sushi) => {
        return {...sushi, eaten: false}
      })
      setSushi(updatedSushi)
    })
  }, [])

  function handleEat(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushi = sushi.map((sushi) => {
        if (sushi.id === eatenSushi.id) return {...sushi, eaten: true}
        return sushi
      })
      setSushi(updatedSushi)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert("Need more money")
    }
  }

  const eatenSushi = sushi.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEat={handleEat} />
      <Table wallet={wallet} plates={eatenSushi}/>
    </div>
  );
}

export default App;
