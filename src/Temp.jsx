import { useState } from "react";
import "./Temp.css";

export default function Temp() {
  const [c, setC] = useState("");
  const [f, setF] = useState("");
  const [history, setHistory] = useState([]);

  const toF = () => {
    const res = (Number(c) * 9) / 5 + 32;
    setF(res);
    setHistory([...history, `${c}C = ${res}F`]);
  };

  const toC = () => {
    const res = ((Number(f) - 32) * 5) / 9;
    setC(res);
    setHistory([...history, `${f}F = ${res}C`]);
  };

  return (
    <div className="container">
      <h2>🌡️ Temperature Converter</h2>

      <input
        placeholder="Celsius"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />
      <br />
      <button onClick={toF}>Convert to °F</button>

      <input
        placeholder="Fahrenheit"
        value={f}
        onChange={(e) => setF(e.target.value)}
      />
      <br />
      <button onClick={toC}>Convert to °C</button>

      <h3>History</h3>
      {history.map((h, i) => (
        <p key={i}>{h}</p>
      ))}
    </div>
  );
}
