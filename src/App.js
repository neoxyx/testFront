import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateIMC = () => {
    //Validación de datos
    if (isNaN(weight) || isNaN(height) || weight === "" || height === "") {
      setResult({
        error: "Por Favor ingrese datos válidos para peso y altura.",
      });
      return;
    }
    //Convierto altura a metros
    const heightInMeters = height / 100;
    //Calculo IMC
    const imc = weight / (heightInMeters * heightInMeters).toFixed(2);
    //Clasificación según peso
    let classification = "";
    if (imc < 18.5) {
      classification = "Bajo Peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      classification = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
      classification = "Sobrepeso";
    } else {
      classification = "Obesidad";
    }

    setResult({ imc, classification });
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
      {result && result.error && <p style={{ color: "red" }}>{result.error}</p>}
      {result && result.imc && (
        <div>
          <p>Tu IMC es: {result.imc}</p>
          <p>Clasificación: {result.classification}</p>
        </div>
      )}
    </div>
  );
}

export default App;
