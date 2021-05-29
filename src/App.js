import Content from "./Components/Content/Index";
import Navigation from "./Components/Navigation/Index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Content />
        <Navigation />
      </Router>
    </>
  );
}

export default App;
