import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateDetails() {
  const { wid, uid } = useParams();
  const [websiteName, setWebsiteName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost/lockify/view_details.php", {
        wid,
        user_id: uid,
      })
      .then((res) => {
        const data = res.data.website;
        setWebsiteName(data.web_name);
        setUsername(data.username);
        setPassword(data.password);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/lockify/update_website.php",
        {
          wid,
          user_id: uid,
          websiteName,
          username,
          password,
        }
      );

      if (response.data.status) {
        alert("Website updated successfully");
        navigate("/home");
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Website Info</h2>
      <label>Website Name:</label>
      <input
        value={websiteName}
        onChange={(e) => setWebsiteName(e.target.value)}
        required
      />
      <br />
      <label>Username:</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <label>Password:</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateDetails;
