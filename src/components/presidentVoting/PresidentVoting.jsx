// App.jsx should have PresidentVoting (imported and mounted)
// PresidentVoting.jsx  should have DisplayVoteTotals (imported and mounted)

// Use a .map() to pass the props to the child component (DisplayVoteTotals)

// Guided Path: Copy and paste the DisplayVoteTotals and pass it individual props
import DisplayVoteTotals from "./DisplayVoteTotals";

function PresidentVoting(props) {
  const votes = [
    {
      name: "Stephen Douglas",
      count: 115509,
    },
    {
      name: "Abe Lincoln",
      count: 139033,
    },
  ];
  return (
    <>
      <h2>Hello from presidentvoting</h2>
      <DisplayVoteTotals />
      <DisplayVoteTotals />
    </>
  );
}

export default PresidentVoting;
