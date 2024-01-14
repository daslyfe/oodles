import logo from "./logo.svg";
import { StrudelFrame } from "./strudelframe";
import { useState } from "react";
import "./App.css";

function Input({ value, onChange, label = "", type = "number" }) {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
function App() {
  const [numWindows, setNumWindows] = useState(2);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 40,
          width: "100",
          position: "absolute",
          color: "white",
          zIndex: 10,
        }}
      >
        <Input
          value={numWindows ?? 0}
          onChange={(val) => setNumWindows(Math.min(Math.max(val, 1), 8))}
          label="Num Windows"
          type="number"
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "blue",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {[...Array(parseInt(numWindows)).keys()].map((key) => {
          console.log(key);
          return <StrudelFrame key={key} />;
        })}
      </div>
    </div>
  );
}

export default App;
