import { useState } from "react";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const navigate = useNavigate();

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);
    setBmi(result.toFixed(2));
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate</button>

      {bmi && <p>Your BMI: {bmi}</p>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default BMICalculator;
