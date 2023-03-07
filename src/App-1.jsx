import "./App.css";
import ChallengeOneInstructions from "./components/challenge/Challenge1-Instructions";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <ChallengeOneInstructions />
      <Footer />
    </div>
  );
}

export default App;
