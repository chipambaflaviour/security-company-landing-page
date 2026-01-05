import { useState } from "react";
import "./ProfileCard.css";
import profileImage from "./assets/profile.jpg";

function ProfileCard({ name, role }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" />

      <h2>{name}</h2>
      <p>{role}</p>

      <button onClick={() => setShowBio(!showBio)}>
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>

      {showBio && (
        <p>
          I am passionate about frontend development and enjoy building
          real-world React applications.
        </p>
      )}
    </div>
  );
}

export default ProfileCard;
