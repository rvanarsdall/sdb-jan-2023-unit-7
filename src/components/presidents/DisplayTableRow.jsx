const DisplayTableRow = (props) => {
  const { president } = props;
  // The footer we know how to capture today...
  //  If  you see an undefined do current year minus birth year
  // Otherwise the year passed - birth year

  return (
    <>
      <tr>
        <td>{president.first}</td>
        <td>{president.last}</td>
        <td>{president.year}</td>
        <td>{president.passed === undefined ? "Living" : "Dead"}</td>
        <td>81</td>
      </tr>
    </>
  );
};

export default DisplayTableRow;
