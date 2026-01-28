import { useState } from "react";
import Country from "./components/Country.jsx";
import "./App.css";

function App() {  
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ]);

  
const handleDeleteCountry = (id) => {
    setCountries(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="countries">
      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
          onDelete={handleDeleteCountry}
        />
      ))}
    </div>
  );
}

export default App;