import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import ItemForm from "./pages/ItemFrom";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<ItemForm />} />
          <Route path="/edit/:id" element={<ItemForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
