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
    <div className="container mt-5">
      <h1 className="text-center">Calculadora IMC</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="form-group">
            <label>Peso (kg):</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Altura (cm):</label>
            <input
              type="number"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div><br></br>
          <button className="btn btn-primary" onClick={calculateIMC}>
            Calcular IMC
          </button>
        </div>
      </div>
      {result && result.error && (
        <p className="mt-3 text-danger">{result.error}</p>
      )}
      {result && result.imc && (
        <div className="mt-3">
          <p>
            <strong>Tu IMC es: {result.imc}</strong>
          </p>
          <p>
            <strong>Clasificación: {result.classification}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
