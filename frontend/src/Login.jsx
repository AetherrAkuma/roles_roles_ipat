import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5000/login", 
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
  
      // Store token, username, and role in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username); // Store username
      localStorage.setItem("role", response.data.role); // Store role
  
      alert("Login successful!");
      // Redirect to dashboard based on role
      if (response.data.role === "Admin") {
        navigate("/Dashboard_Chua");
      } else if (response.data.role === "Staff_1") {
        navigate("/Dashboard_Ambuyo");
      } else if (response.data.role === "Staff_2") {
        navigate("/Dashboard_Bebar");
      } else if (response.data.role === "Staff_3") {
        navigate("/Dashboard_DeDios");
      } else if (response.data.role === "Staff_4") {
        navigate("/Dashboard_Morales");
      } else {
        navigate("");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid credentials");
    }
  };
  

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Login</Typography>
      <TextField label="Username" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
      <div style={{ margin: "10px 0" }}></div>
      <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/")}>
        Register
      </Button>
    </Container>
  );
};

export default Login;
