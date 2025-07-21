import React from "react";
import NavBar from "./components/NavBar";
import ContextCard from "./components/ContextCard";
import ColourPalettes from "./components/ColourPalettes";
import "./styles/palettes.css";

function App() {
  return (
    <>
      <NavBar />
      <ContextCard />
      <ColourPalettes />
    </>
  );
}

export default App;
