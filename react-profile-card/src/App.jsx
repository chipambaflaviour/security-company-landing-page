import ProfileCard from "./ProfileCard";
import Skills from "./Skills";

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <h1>My React Profile</h1>

        <ProfileCard
          name="Flaviour Chipamba"
          role="Frontend Developer"
        />

        <Skills />
      </div>
    </div>
  );
}

export default App;
