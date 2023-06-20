import React from "react";
import Home from "./routes/FunctionHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie-detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
