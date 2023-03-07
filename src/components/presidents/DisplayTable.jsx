import DisplayTableRow from "./DisplayTableRow";

const DisplayTable = (props) => {
  const { title, presidentData } = props;
  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Year</th>
            <th>Currently Living</th>
            <th>Age Died</th>
          </tr>
        </thead>
        <tbody>
          {presidentData.map((president, idx) => (
            <DisplayTableRow key={idx} president={president} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayTable;
