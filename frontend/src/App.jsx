import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import CHUA from "./Dashboard_Chua";
import Dashboard3 from "./Dashboard3";
import CHUA from "./CHUA"; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chua" element={<CHUA />} />
        <Route path="/staff2" element={<Dashboard3 />} />
        <Route path="/chua" element={<CHUA />} />
      </Routes>
    </Router>
  );
}

export default App;
