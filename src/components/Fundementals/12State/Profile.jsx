import { useState } from "react";
import React from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "John", age: 22 });

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log([name], value);
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <ul>
        <li>{profile.name}</li>
        <li>{profile.age}</li>
      </ul>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Profile;
