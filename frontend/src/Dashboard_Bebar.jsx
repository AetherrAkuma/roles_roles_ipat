import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const Dashboard_Bebar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userRole, setRole] = useState("");

  useEffect(() => {
    // Retrieve the user and role from localStorage
    const storedUser = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");

    console.log("Stored User:", storedUser); // Debugging log
    console.log("Stored Role:", storedRole); // Debugging log

    if (storedUser && storedRole) {
      setUser(storedUser);
      setRole(storedRole);

      // If the user is not authorized for this dashboard, redirect them
      if (storedRole !== "Staff_2") {
        if (storedRole === "Admin") {
          console.log("Admin access granted, no redirect needed.");
        } else {
          console.log("Not Staff_2, redirecting to login...");
          navigate("/login"); 
        }
      }
    } else {
      console.log("No user or role found, redirecting to login..."); // Debugging log
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container>
      <Typography variant="h4">
        Welcome {userRole} {user} to Bebar Dashboard
      </Typography>

      {userRole === "Admin" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/Dashboard_Chua")} // Redirect to admin dashboard
          sx={{ margin: '20px 0' }}
        >
          Go to Admin Dashboard
        </Button>
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          // Clear localStorage and redirect to login
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("role");
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard_Bebar;
