import "./App.css";
import EmployeeInformation from "./components/employee/EmployeeInformation";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PresidentVoting from "./components/presidentVoting/PresidentVoting";
function App() {
  const employees = [
    {
      name: "Beth",
      location: "Indianapolis, IN",
      position: "Manager",
      favoriteFood: "Pretzel Sticks",
    },
    {
      name: "John",
      location: "Boise, ID",
      position: "Cook",
      favoriteFood: "Scrambled Eggs",
    },
    {
      name: "Jerry",
      location: "Quohog, MI",
      position: "Bottle Redemption Specialist",
      favoriteFood: "Frog Legs",
    },
    {
      name: "Weasel",
      location: "Philadelphia, PA",
      position: "Janitor",
      favoriteFood: "Frog Legs",
    },
    {
      name: "Bernard",
      location: "Burlington Vermont",
      position: "cat",
      favoriteFood: "spinich",
    },
  ];

  return (
    <div className="App">
      <Header />
      <EmployeeInformation
        name="Rob"
        location="Boston, MA"
        position="Lead Pizza Flipper"
        favoriteFood="Hamburger"
      />
      <EmployeeInformation
        name="Paul"
        location="San Jose, CA"
        position="Rob's Boss"
        favoriteFood="Pizza"
      />
      {/* MAP EXAMPLE */}

      {employees.map((employee, idx) => (
        <EmployeeInformation
          key={idx}
          name={employee.name}
          location={employee.location}
          position={employee.position}
          favoriteFood={employee.favoriteFood}
        />
      ))}

      <PresidentVoting />
      <Footer />
    </div>
  );
}

export default App;
