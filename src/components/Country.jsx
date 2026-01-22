import { useState } from "react";

function Country() {
  
const [name, setName] = useState("United States");
const [gold, setGold] = useState(0);


  function handleClick() {
    // when a component's state is altered, it is re-rendered asynchronously by react
    setGold(g => g + 1);

  }

  return (
    <div
      className="country"
      // onClick={handleClick}
    >
      {name} gold medals: {gold} <button className="btn" onClick={handleClick}>+</button>
    </div>
  );
}

export default Country;