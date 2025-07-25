import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteDetails() {
  const { wid, uid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmAndDelete = async () => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this website?"
      );
      if (!confirmDelete) {
        navigate("/home");
        return;
      }

      try {
        const res = await axios.post(
          "http://localhost/lockify/delete_website.php",
          {
            wid,
            user_id: uid,
          }
        );

        if (res.data.status) {
          alert("Website deleted successfully");
        } else {
          alert("Failed to delete");
        }

        navigate("/home");
      } catch (err) {
        console.error(err);
      }
    };

    confirmAndDelete();
  }, []);

  return null; // No UI needed, automatic action
}

export default DeleteDetails;
