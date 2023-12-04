import Home from "./Pages/HomePage";
import Interview from "./Pages/Interview";
import FloorMap from "./Pages/FloorMap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/interview" element={<Interview />} />
      </Routes>

      <Routes>
        <Route path="/floorPlan" element={<FloorMap />} />
      </Routes>
    </Router>
  );
}

export default App;
