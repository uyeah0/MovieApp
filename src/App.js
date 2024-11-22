import React from "react";

function Food({ favorite }) {
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello I'm Rachel</h1>
      <Food favorite="kimchi" />
      <Food favorite="pizza" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
    </div>
  );
}

export default App;
