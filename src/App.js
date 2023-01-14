import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainNavBar } from "./Components/Main/Index/index";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <MainNavBar />
          <Routes>
            <Route path="/Netflix-clone" element={<Home />} />
            <Route path="/Netflix-clone/movies" element={<Movies />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div >
  );
}

export default App;
