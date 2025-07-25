import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WebsiteDetails() {
  const { wid, uid } = useParams();
  const [result, setResult] = useState([]);

  const fetchWebsiteDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost/lockify/view_details.php",
        {
          user_id: uid,
          wid,
        }
      );
      setResult(response.data.website);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchWebsiteDetails();
  }, []);

  return (
    <>
      <div className="vcontent">
        <h3>{result.web_name}</h3>
        <p>
          Username : <b>{result.username}</b>
        </p>
        <p>
          Password : <b>{result.password}</b>
        </p>
        <br />
        <a href="/home">Back to Home Page</a>
      </div>
    </>
  );
}

export default WebsiteDetails;
