import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Dashboard1 from "./Dashboard1";
import Dashboard3 from "./Dashboard3";
import CHUA from "./CHUA"; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff" element={<Dashboard1 />} />
        <Route path="/staff2" element={<Dashboard3 />} />
        <Route path="/chua" element={<CHUA />} />
      </Routes>
    </Router>
  );
}

export default App;
