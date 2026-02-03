import Medal from "./Medal.jsx";

function Country({ country, onInc, onDec, onDelete }) {
  const { id, name, gold, silver, bronze } = country;
  const total = gold + silver + bronze;

  return (
    
<section className="country">
      <h2>{name} {total}</h2>

      <div className="medals">
        <Medal
          label="Gold"
          // color="#d4af37"
          count={gold}
          onInc={() => onInc(id, "gold")}
          onDec={() => onDec(id, "gold")}
        />
        <Medal
          label="Silver"
          // color="#c0c0c0"
          count={silver}
          onInc={() => onInc(id, "silver")}
          onDec={() => onDec(id, "silver")}
        />
        <Medal
          label="Bronze"
          // color="#cd7f32"
          count={bronze}
          onInc={() => onInc(id, "bronze")}
          onDec={() => onDec(id, "bronze")}
        />
      </div>
      <button className="btn-delete" onClick={() => onDelete(id)}>Delete</button>
    </section>
  );
}

export default Country;