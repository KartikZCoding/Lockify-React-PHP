import React from "react";
import Register from "./Register";
import Login from "./Login";
import ProfilePassword from "./ProfilePassword";
import AddWebsiteInfo from "./AddWebsiteInfo";
import "./App.css";
import Home from "./Home";
import WebsiteDetails from "./WebsiteDetails";
import UpdateDetails from "./UpdateDetails";
import DeleteDetails from "./DeleteDetails";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");

  const logOut = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    navigate("/login");
  };
  return (
    <>
      <div className="header">
        <h1>Locify - A Secure Password Manager</h1>
        <h3
          style={{
            float: "right",
            color: "white",
            position: "relative",
            bottom: "45px",
            right: "20px",
          }}
        >
          {userId ? (
            <>
              Welcome {localStorage.getItem("user_name")},{" "}
              <input type="button" value="Logout" onClick={logOut} />
            </>
          ) : (
            <></>
          )}
        </h3>
      </div>
      <div className="content">
        <Routes>
          <Route path="" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add_website" element={<AddWebsiteInfo />} />
          <Route path="/website/:wid/:uid" element={<WebsiteDetails />} />
          <Route path="/profile/:wid/:uid" element={<ProfilePassword />} />
          <Route path="/update/:wid/:uid" element={<UpdateDetails />} />
          <Route path="/delete/:wid/:uid" element={<DeleteDetails />} />
        </Routes>
      </div>

      <div className="footer">
        <center>
          <p>&copy; 2025 Locify. All rights reserved.</p>
        </center>
      </div>
    </>
  );
}

export default App;
