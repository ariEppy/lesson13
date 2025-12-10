import React from "react";
import Header from "./components/Header";  
import Students from "./data/students";
import Dashboard from "./components/Dashboard";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div>
      <Header /> 
      <Dashboard students={Students}/>
      <Footer />
    </div>
  );
}

export default App;
