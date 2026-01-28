import { useState } from "react";

function Country({ country, onDelete }) {
  
// const [name, setName] = useState("United States");
// const [gold, setGold] = useState(0);
const { id, name, gold } = country;


  function handleClick() {
    // when a component's state is altered, it is re-rendered asynchronously by react
    setGold(g => g + 1);

  }

  return (
    <div className="country">
      <h3>{name}</h3>
      <p>Gold Medals: {gold}</p>
      <button
        type="button"
        onClick={() => onDelete?.(id)}
        aria-label={`Delete ${name}`}
      >
        Delete
      </button>
    </div>
  );
}

export default Country;