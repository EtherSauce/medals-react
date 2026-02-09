import { useState } from "react";
import triggerIcon from "../assets/trigger.svg";

function NewCountry({ onAddCountry }) {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState("");

  const handleAdd = () => {
    const trimmedName = name.trim();
    if (trimmedName.length > 0) {
      onAddCountry(trimmedName);
      setName("");
      setShowDialog(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const isValid = name.trim().length > 0;

  return (
    <div>
      <button id="trigger" onClick={() => setShowDialog(true)}>
        <img src={triggerIcon} alt="Add Country" />
      </button>

      {showDialog && (
        <div className="dialog-overlay" onClick={() => setShowDialog(false)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <h2>Enter A New Country Name</h2>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
            <div className="dialog-buttons">
              <button onClick={handleAdd} disabled={!isValid}>
                Add
              </button>
              <button onClick={() => setShowDialog(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewCountry;
