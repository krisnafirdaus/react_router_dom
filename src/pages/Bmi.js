import React, { useState } from "react";

export default function Bmi() {
  const [userBmi, setUserBmi] = useState("");
  const [userData, setUserData] = useState({
    KG: 0,
    M: 0,
  });

  const [bmiResult, setBmiResult] = useState("");

  const eventHandle = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setUserBmi(Number(userData.KG / (userData.M * userData.M)));
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log(userBmi);
    if (userBmi < 18.5) {
      setBmiResult("Underweight");
    } else if (userBmi < 24.9 && userBmi > 18.5) {
      setBmiResult("Normal");
    } else if (userBmi < 29.9 && userBmi > 25) {
      setBmiResult("Overweight");
    } else if (userBmi < 34.9 && userBmi > 30) {
      setBmiResult("Obese");
    } else if (userBmi > 35) {
      setBmiResult("Extremely Obese");
    }

    alert(bmiResult);
  };

  return (
    <div>
      <h1>Check Your BMI</h1>
      <input
        type="number"
        name="KG"
        placeholder="weight"
        onChange={eventHandle}
      />
      <input
        type="number"
        name="M"
        placeholder="height"
        onChange={eventHandle}
      />
      <button type="submit" onClick={submit}>
        Check
      </button>
    </div>
  );
}
