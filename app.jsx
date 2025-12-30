import Signup from "./Signup";
import Login from "./Login";
import CreateIssue from "./CreateIssue";
import IssueList from "./IssueList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Issue Board</h1>
      <Signup />
      <Login />
      <CreateIssue />
      <hr />
      <IssueList />
    </div>
  );
}

export default App;
