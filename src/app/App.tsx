import Home from "../Pages/HomePage";
import Interview from "../Pages/FAQ";
import FloorMap from "../Pages/FloorMap";
import FAQ from "../Pages/FAQ";
import ContactUs from "../Pages/ContactUs";
import Location from "../Pages/Location";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//function app
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
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>

      <Routes>
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>

      <Routes>
        <Route path="/floorPlan" element={<FloorMap />} />
      </Routes>

      <Routes>
        <Route path="/Location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
