import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>My React Profile</h1>

      <ProfileCard
        name="Flaviour Chipamba"
        role="Frontend Developer"
      />
    </div>
  );
}

export default App;
