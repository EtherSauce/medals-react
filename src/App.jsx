
import { useState, useRef, useEffect, useMemo } from "react";
import Country from "./components/Country.jsx";
import NewCountry from "./components/NewCountry.jsx";
import "./App.css";
import { getCountries, createCountry, deleteCountry } from "./services/medalsApi";

function App() {
  const [countries, setCountries] = useState([]);

  // Fetch initial country/medal data from API
  useEffect(() => {
    getCountries()
      .then(data => setCountries(data))
      .catch(err => {
        console.error("Error fetching countries:", err);
      });
  }, []);

  
  const medals = useRef([
    { id: 1, name: "gold Medals" },
    { id: 2, name: "silver Medals" },
    { id: 3, name: "bronze Medals" },
  ]);


  
  const handleDeleteCountry = async (id) => {
    try {
      await deleteCountry(id);
      setCountries(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error("Error deleting country:", err);
    }
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

  const handleAddCountry = async (name) => {
    try {
      const newCountry = await createCountry({ name });
      setCountries(prev => [...prev, newCountry]);
    } catch (err) {
      console.error("Error adding country:", err);
    }
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