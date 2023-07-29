import React from "react";
import RoutesList from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesList />
      </div>
    </BrowserRouter>
  );
}

export default App;
