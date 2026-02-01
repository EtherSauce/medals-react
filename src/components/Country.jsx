import { useState } from "react";
import Medal from "./Medal.jsx";

function Country({ country, medals, onDelete }) {
  
// const [name, setName] = useState("United States");
// const [gold, setGold] = useState(0);
const { id, name, gold } = country;


  function handleClick() {
    // when a component's state is altered, it is re-rendered asynchronously by react
    setGold(g => g + 1);

  }

  return (
    <div className="country">
      <div className="country-header">
        <h3>{name}</h3>
        <button
          type="button"
          onClick={() => onDelete?.(id)}
          aria-label={`Delete ${name}`}
        >
          Delete
        </button>
      </div>
      {/* <p>Gold Medals: {gold}</p> */}
      <div className="medals">
        {medals.map((medal) => (
          <Medal key={medal.id} medal={medal} />
        ))}
      </div>
    </div>
  );
}

export default Country;