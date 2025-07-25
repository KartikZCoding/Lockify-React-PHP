import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProfilePassword() {
  const [password, setPassword] = useState("");
  const { wid, uid } = useParams();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("user_id");

      const response = await axios.post(
        "http://localhost/lockify/profile_password.php",
        {
          password,
          user_id: id,
        }
      );
      // alert(response.data);

      if (response.data.status) {
        navigate(`/website/${wid}/${uid}`);
      } else {
        alert("Invalid Profile Password");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <br />
      <form onSubmit={submitHandler}>
        <h2>Profile Password*</h2>
        <table border={1} align="center" cellPadding={10} cellSpacing={0}>
          <tbody>
            <tr>
              <td>Profile Password *</td>
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
                <input type="submit" name="submit" id="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default ProfilePassword;
