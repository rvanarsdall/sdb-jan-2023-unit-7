function EmployeeInformation(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <ul style={{ listStyleType: "none" }}>
        <li>From: {props.location}</li>
        <li>Position: {props.position}</li>
        <li>Favorite Food: {props.favoriteFood}</li>
      </ul>
    </>
  );
}

export default EmployeeInformation;
