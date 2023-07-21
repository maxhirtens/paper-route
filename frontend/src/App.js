import React, { useState, useEffect } from "react";
import RoutesList from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { Spinner } from "reactstrap";
import NavBar from "./navbar/NavBar";
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <RoutesList />
      </div>
    </BrowserRouter>
  );
}

export default App;
