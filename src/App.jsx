import React from "react";
import NavBar from "./components/NavBar";
import ContextCard from "./components/ContextCard";
import ColourPalettes from "./components/ColourPalettes";
import "./styles/palettes.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ContextCard />
      <ColourPalettes />
      <Footer />
    </>
  );
}

export default App;
