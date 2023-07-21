import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../home/Home";
import NYT from "../newspapers/NYT";
// import ProfileForm from "../profiles/ProfileForm";
// import LoginForm from "../auth/LoginForm";
// import SignupForm from "../auth/SignupForm";

// all front end routes for the app, including new format for private routes.

const RoutesList = ({ signup, login }) => {
  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nyt" element={<NYT />}></Route>
        {/* <Route path="/login" element={<LoginForm login={login} />}></Route>
        <Route path="/signup" element={<SignupForm signup={signup} />}></Route> */}
        <Route path="/profile" element={<Navigate to="/" />}></Route>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutesList;
