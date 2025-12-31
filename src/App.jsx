import React from "react";
import Navbar from "./components/Navbar";
import Centre from "./components/Centre";
import Card from "./components/Card";
import ns200 from "./assets/ns200.jpg";
import r15 from "./assets/r15.jpg";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  const data = [
    {
      name: "NS 200",
      Rate: "350/Hr",
      Available: true,
      image: ns200,
    },
    {
      name: "R15",
      Rate: "300/Hr",
      Available: true,
      image: r15,
    },
  ];
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Centre />
              <Card data={data} />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
