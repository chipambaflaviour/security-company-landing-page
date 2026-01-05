import ProfileCard from "./ProfileCard";
import Skills from "./Skills";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>My React Profile</h1>

      <ProfileCard
        name="Flaviour Chipamba"
        role="Frontend Developer"
      />

      <Skills />
    </div>
  );
}

export default App;
