import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddWebsiteInfo() {
  const [websiteName, setWebsiteName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("user_id");
      const data = { websiteName, username, password, id };

      const response = await axios.post(
        "http://localhost/lockify/add_website.php",
        data
      );
      if (response.data.status) {
        alert("Website Details Added Successfully");
        navigate("/home");
      } else {
        alert("Error...Try Again");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <br />
      <br />
      <a href="/home" style={{ float: "right", fontSize: "20px" }}>
        Goto Home
      </a>
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <h2>Website Information</h2>
        <table border={1} align="center" cellPadding={10} cellSpacing={0}>
          <tr>
            <td>Website Name</td>
            <td>
              <input
                type="text"
                name="wname"
                id="wname"
                value={websiteName}
                onChange={(e) => setWebsiteName(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Username</td>
            <td>
              <input
                type="text"
                name="uname"
                id="uname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Password</td>
            <td>
              <input
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2} align="center">
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Add Details"
              />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default AddWebsiteInfo;
