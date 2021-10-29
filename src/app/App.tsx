import React from "react";
import Counter from "../features/counter/Counter";
import Auth from "../features/auth/AuthComp";
import Header from "../features/header/Header";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Counter />
      <Auth />
      <Header />
    </div>
  );
}

export default App;
