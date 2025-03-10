import "./App.css";
import ChoreList from "./Components/Chores";
import PingTest from "./Components/Tests/PingTest";
import WorkingTest from "./Components/Tests/WorkingTest";

function App() {
  return (
    <div className="appContainer">
      <ChoreList></ChoreList>
      {/* <WorkingTest></WorkingTest> */}
    </div>
  );
}

export default App;
