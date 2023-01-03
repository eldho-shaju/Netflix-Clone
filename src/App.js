import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainNavBar } from "./Components/Main/Index/Index";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
