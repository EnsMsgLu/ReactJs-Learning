import React from "react";
import Card from "./Card";

const index = () => {
  return (
    <>
      <h1>My Cards</h1>
      <Card>
        <h2>Card Title 1</h2>
        <p>This is some content for card 1.</p>
      </Card>
      <Card>
        <h2>Card Title 2</h2>
        <p>This is some content for card 2.</p>
      </Card>
      <Card>
        <h2>Card Title 3</h2>
        <p>This is some content for card 3.</p>
      </Card>
    </>
  );
};

export default index;
