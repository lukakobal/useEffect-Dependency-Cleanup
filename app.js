import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [checks, setChecks] = useState(0);

  useEffect(() => {
    if (!isMonitoring) return;

    console.log("🟢 Monitoring started");

    const interval = setInterval(() => {
      console.log("Checking connection...");
      setChecks((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("🔴 Cleaning old monitoring");
      clearInterval(interval);
    };
  }, [isMonitoring]);

  return (
    <div className="app">
      <h1>React 76 – useEffect Dependency Cleanup</h1>

      <p>Status: {isMonitoring ? "Monitoring..." : "Stopped"}</p>
      <p>Checks performed: {checks}</p>

      <div className="buttons">
        <button onClick={() => setIsMonitoring(true)}>Start monitoring</button>
        <button onClick={() => setIsMonitoring(false)}>Stop monitoring</button>
      </div>
    </div>
  );
}

export default App;
