import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePassword, setProfilePassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { name, email, contact, password, profilePassword };
    if (password == confirmPassword) {
      try {
        const response = await axios.post(
          "http://localhost/lockify/register.php",
          data
        );
        if (response.data.status) {
          alert("Registered Successfully");
          navigate("/login");
        } else {
          alert("Error in Code");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("MissMatch Password");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Register Here!!</h2>
        <table border={1} align="center" cellPadding={10} cellSpacing={0}>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
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
            <td>Contact</td>
            <td>
              <input
                type="text"
                name="contact"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
            <td>Confirm Password</td>
            <td>
              <input
                type="text"
                name="cpassword"
                id="cpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Profile Password</td>
            <td>
              <input
                type="text"
                name="profile_pwd"
                id="profile_pwd"
                value={profilePassword}
                onChange={(e) => setProfilePassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <input type="submit" name="submit" id="submit" value="Submit" />
            </td>
          </tr>
        </table>
      </form>
      <center>
        <Link to="/login">Already register so goto Login!</Link>
      </center>
    </>
  );
}

export default Register;
