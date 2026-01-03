import { useState } from "react";

function ProfileCard({ name, role }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      width: "320px",
      borderRadius: "10px",
      marginTop: "20px"
    }}>
      <h2>{name}</h2>
      <p>{role}</p>

      <button onClick={() => setShowBio(!showBio)}>
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>

      {showBio && (
        <p style={{ marginTop: "10px" }}>
          I am passionate about frontend development and enjoy building
          real-world React applications.
        </p>
      )}
    </div>
  );
}

export default ProfileCard;
