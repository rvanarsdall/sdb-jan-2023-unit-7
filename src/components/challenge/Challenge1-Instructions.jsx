import AboutMe from "./AboutMe";

function ChallengeOneInstructions() {
  return (
    <>
      <h3>Create the Following</h3>
      <ul style={{ textAlign: "left", color: "red" }}>
        <li>Create a new component called AboutMe.jsx</li>
        <li>create an h1 tag with your full name</li>
        <li>
          create a p tag with where you grew up (city/state) - use variables for
          city and state
        </li>
        <li>
          an unordered list with the last 3 places you have visited (target,
          alaska..etc)
        </li>
      </ul>
      <p>
        <b>BONUS:</b> Remove the Bullet Points from the list.
      </p>
      {/* MOUNT YOUR ABOUT ME HERE */}
      <AboutMe />
    </>
  );
}

export default ChallengeOneInstructions;
