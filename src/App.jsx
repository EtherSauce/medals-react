import { useState, useRef, useEffect } from "react";
import Country from "./components/Country.jsx";
import "./App.css";

function App() {  
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ]);
  
  const medals = useRef([
    { id: 1, name: "gold Medals" },
    { id: 2, name: "silver Medals" },
    { id: 3, name: "bronze Medals" },
  ]);


  
const handleDeleteCountry = (id) => {
    setCountries(prev => prev.filter(c => c.id !== id));
  };

  return (
    <main className="app">

      <section className="countries">
        {countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            medals={medals.current}
            onDelete={handleDeleteCountry}
          />
        ))}
      </section>
    </main>
  );
}

export default App;