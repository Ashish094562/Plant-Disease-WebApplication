import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://plant-disease-flask.onrender.com/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert("Error connecting to backend");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🌱 Plant Disease Detection</h1>
        <p className="subtitle">
          Upload a plant leaf image to detect disease using a TFLite AI model.
        </p>

        <div className="upload-section">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={loading}>
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Uploaded Leaf" />
          </div>
        )}

        {loading && <div className="loader"></div>}

        {result && (
          <div className="result">
            <div className="badge success">
              ✅ Prediction Complete
            </div>

            <h2 className="disease-title">{result.disease}</h2>

            <div className="confidence-bar">
              <div
                className="confidence-fill"
                style={{ width: `${result.confidence * 100}%` }}
              ></div>
            </div>

            <p className="confidence-text">
              Confidence: {(result.confidence * 100).toFixed(2)}%
            </p>

            {result.confidence < 0.5 && (
              <div className="badge warning">
                ⚠️ Low confidence — image may be unclear.
              </div>
            )}

            <div className="info-box">
              <h3>🦠 Cause</h3>
              <p>{result.cause}</p>
            </div>

            <div className="info-box">
              <h3>💊 Recommended Treatment</h3>
              <p>{result.cure}</p>
            </div>

            <h3 className="top-title">📊 Top Predictions</h3>
            <ul className="top-list">
              {result.top_predictions.map((item, index) => (
                <li key={index}>
                  <span>{item.label}</span>
                  <span>{(item.probability * 100).toFixed(2)}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
