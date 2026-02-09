import { useState, useRef, useEffect, useMemo } from "react";
import Country from "./components/Country.jsx";
import NewCountry from "./components/NewCountry.jsx";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China",         gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France",        gold: 0, silver: 2, bronze: 2 },
  ]);

  
  const medals = useRef([
    { id: 1, name: "gold Medals" },
    { id: 2, name: "silver Medals" },
    { id: 3, name: "bronze Medals" },
  ]);


  
  const handleDeleteCountry = (id) => {
    setCountries(prev => prev.filter(c => c.id !== id));
  };
  
  const handleIncrement = (id, medal) => {
    setCountries(prev =>
      prev.map(c =>
        c.id === id ? { ...c, [medal]: c[medal] + 1 } : c
      )
    );
  };

  const handleDecrement = (id, medal) => {
    setCountries(prev =>
      prev.map(c =>
        c.id === id ? { ...c, [medal]: Math.max(0, c[medal] - 1) } : c
      )
    );
  };

  const handleAddCountry = (name) => {
    const newId = countries.length > 0 ? Math.max(...countries.map(c => c.id)) + 1 : 1;
    setCountries(prev => [
      ...prev,
      { id: newId, name, gold: 0, silver: 0, bronze: 0 }
    ]);
  };

const totals = useMemo(() => {
    return countries.reduce(
      (acc, c) => {
        acc.gold   += c.gold;
        acc.silver += c.silver;
        acc.bronze += c.bronze;
        return acc;
      },
      { gold: 0, silver: 0, bronze: 0 }
    );
  }, [countries]);

  const grandTotal = totals.gold + totals.silver + totals.bronze;

  return (
    <div className="app">
      <h1>Olympic Medals {grandTotal}</h1>

      <NewCountry onAddCountry={handleAddCountry} />

      <main>
        {countries.map(country => (
          <Country
            key={country.id}
            country={country}
            onInc={handleIncrement}
            onDec={handleDecrement}
            onDelete={handleDeleteCountry}
          />
        ))}
      </main>
    </div>
  );
}

export default App;