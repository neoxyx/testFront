import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateIMC = () => {
    //Convierto altura a metros
    const heightInMeters = height / 100;
    //Calculo IMC
    const imc = weight / (heightInMeters * heightInMeters).toFixed(2);
    setResult(imc);
  };
  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateIMC}>Calcular IMC</button>
      {result && <p>Tu IMC es {result}</p>}
    </div>
  );
}

export default App;
