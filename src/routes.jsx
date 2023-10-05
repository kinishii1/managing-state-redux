import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./PaginaPadrao";
import Home from "./Pages/Home";
import Categoria from "./Pages/Categoria";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:id" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
