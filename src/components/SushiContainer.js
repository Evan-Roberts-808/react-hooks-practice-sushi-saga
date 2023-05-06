import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushi, onEat }) {
  const [ sushiIndex, setSushiIndex ] = useState(0)

  const sushiList = sushi
  .slice(sushiIndex, sushiIndex + 4)
  .map((sushi) => (
    <Sushi key={sushi.id} sushi={sushi} onEat={onEat}/>
  ))

  function handleClickMore() {
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushi.length)
  }

  return (
    <div className="belt">
      {sushiList}
      <MoreButton onClick={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
