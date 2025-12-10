import React from "react";
import "./Header.css";
import logo from "./logo.png"; 

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="App Logo" />
      <h1 className="title">Students</h1>
    </div>
  );
}
