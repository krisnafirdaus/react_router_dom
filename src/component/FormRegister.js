import React, { useState } from "react";
import "../App.css";

const FormRegister = () => {
  const [user, setUser] = useState({
    nama: "",
    email: "",
    password: "",
    address: "",
    birthdate: "",
    gender: "",
    skill: "",
  });
  const handlechange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert(
      user.nama +
        " " +
        user.email +
        " " +
        user.password +
        " " +
        user.address +
        " " +
        user.birthdate +
        " " +
        user.gender +
        " " +
        user.skill
    );
  };

  return (
    <div>
      <form>
        {/* Regitser */}
        <label htmlFor="">Nama</label>
        <input type="text" name="nama" onChange={handlechange} /> <br />
        <label htmlFor="">Email</label>
        <input type="text" name="email" onChange={handlechange} /> <br />
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={handlechange} /> <br />
        <label htmlFor="">Address</label>
        <textarea name="address" onChange={handlechange} /> <br />
        <label htmlFor="">Birthdate</label>
        <input type="date" name="birthdate" onChange={handlechange} /> <br />
        <label htmlFor="">Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handlechange}
        />
        <label htmlFor="">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handlechange}
        />
        <label htmlFor="">Female</label>
        <br />
        <label htmlFor="">Skill</label>
        <input
          type="checkbox"
          name="skill"
          value="coding"
          onChange={handlechange}
        />
        <label htmlFor="">Coding</label>
        <input
          type="checkbox"
          name="skill"
          value="design"
          onChange={handlechange}
        />
        <label htmlFor="">Design</label>
        <input
          type="checkbox"
          name="skill"
          value="gaming"
          onChange={handlechange}
        />
        <label htmlFor="">Gaming</label>
        <br />
        {/* Button */}
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default FormRegister;
