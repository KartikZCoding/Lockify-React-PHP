import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const response = await axios.post(
        "http://localhost/lockify/login.php",
        data
      );

      if (response.data.status) {
        const id = response.data.user.user_id;
        localStorage.setItem("user_id", id);
        localStorage.setItem("user_name", response.data.user.name);
        navigate("/home");
      } else {
        alert("Invalid UserName or Password");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <br />
      <br />

      <form onSubmit={submitHandler}>
        <h2>Login Here!!</h2>
        <table border={1} align="center" cellPadding={10} cellSpacing={0}>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <input type="submit" name="submit" id="submit" value="Login" />
            </td>
          </tr>
        </table>
      </form>
      <center>
        <Link to="/register">Not Registered Yet ?</Link>
      </center>
    </>
  );
}

export default Login;
