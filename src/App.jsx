import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import DisplayTable from "./components/presidents/DisplayTable";
import { presidentsArray } from "./components/presidents/presidentsData";
function App() {
  // Create a filter for dead presidents

  // Create a filter for alive presidents

  //Reuse the display table and the "PresidentsData" will be equal to the filter you created
  return (
    <div className="App">
      <Header />
      <DisplayTable presidentData={presidentsArray} title="All Presidents" />
      {/* <DisplayTable presidentData={deadPresidentsArray} title="All Presidents" /> */}
      <Footer />
    </div>
  );
}

export default App;
