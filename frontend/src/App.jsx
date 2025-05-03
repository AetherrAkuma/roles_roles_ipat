import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard_Chua from "./Dashboard_Chua"; 
import Dashboard_Ambuyo from "./Dashboard_Ambuyo";
import Dashboard_Bebar from "./Dashboard_Bebar";
import Dashboard_DeDios from "./Dashboard_DeDios";
import Dashboard_Morales from "./Dashboard_Morales";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard_Chua" element={<Dashboard_Chua />} />
        <Route path="/Dashboard_Ambuyo" element={<Dashboard_Ambuyo />} />
        <Route path="/Dashboard_Bebar" element={<Dashboard_Bebar />} />
        <Route path="/Dashboard_Morales" element={<Dashboard_Morales />} />
        <Route path="/Dashboard_DeDios" element={<Dashboard_DeDios />} />
      </Routes>
    </Router>
  );
}

export default App;