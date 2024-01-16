import QRCode from "react-qr-code";
import "./App.css";
import { useState } from "react";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  // will use the particular package called react-qr-code

  function handleClick() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="App">
      <h1>QR Code Generator.</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}

export default App;
