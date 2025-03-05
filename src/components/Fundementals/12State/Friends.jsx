import React, { useState } from "react";

const Friends = () => {
  const [friends, setFriend] = useState(["Haj", "Lay", "Fay"]);
  const [newFriend, setNewFriend] = useState("");

  const AddNewFriend = (e) => {
    console.log(e);
    setFriend([...friends, newFriend]);
    setNewFriend("");
  };
  const RemoveFriend = () => {
    setFriend(friends.filter((f) => f !== "Haj"));
  };
  const UpdateFriend = () => {
    setFriend(friends.map((f) => (f === "Lay" ? "Key" : f)));
  };
  return (
    <div>
      {friends.map((f, index) => (
        <lu key={index}>
          <li>{f}</li>
        </lu>
      ))}
      <input
        type="text"
        onChange={(e) => setNewFriend(e.target.value)}
        value={newFriend}
      />
      <button onClick={AddNewFriend}>Add Friend</button>
      <button onClick={RemoveFriend}>Remove Friend</button>
      <button onClick={UpdateFriend}>Update Friend</button>
    </div>
  );
};

export default Friends;
