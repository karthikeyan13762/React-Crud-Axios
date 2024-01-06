import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Read from "./Components/Read";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <p className="position-sticky">
        <span>
          <a href="/create" className="btn btn-primary me-3">
            HOME
          </a>
        </span>
        <span>
          <a href="/read" className="btn btn-primary">
            Update/Delete
          </a>
        </span>
      </p>
      <h1 className="mt-2 CrudContent">Crud Operation</h1>

      <Router>
        <Routes>
          <Route exact path="/create" element={<Create />} />

          <Route id="read" exact path="/read" element={<Read />} />

          <Route exact path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
