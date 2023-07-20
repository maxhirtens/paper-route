import React, { useState, useEffect } from "react";
import RoutesList from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import Loading from "./helpers/loading";
import { decodeToken } from "react-jwt";
import NavBar from "./navbar/NavBar";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading />;
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
