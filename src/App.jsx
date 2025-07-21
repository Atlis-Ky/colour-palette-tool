import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ContextCard from "./components/ContextCard";
import ColourPalettes from "./components/ColourPalettes";
import "./styles/palettes.css";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavBar onSearch={setSearchTerm} searchValue={searchTerm} />
      <ContextCard />
      <ColourPalettes searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App;
