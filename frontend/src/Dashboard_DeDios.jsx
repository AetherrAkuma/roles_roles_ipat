import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Dashboard_DeDios = () => {
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

      // If the user is not a staff member, redirect them
      if (storedRole !== "Staff_3") {
        if (storedRole === "Admin") {
          console.log("Admin access granted, no redirect needed.");
        } else {
          console.log("Not Staff_3, redirecting to login...");
          navigate("/login"); 
        }
      }
    } else {
      console.log("No user or role found, redirecting to login..."); // Debugging log

    }
  }, [navigate]);

  return (
    <Box
      sx={{
        backgroundImage: `url('https://media.tenor.com/ZS4PGVySFRAAAAAM/zani-zani-wink.gif')`, // Background Image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', // Minimum height is 100% of viewport height
        width: '100vw', // Width is 100% of viewport width
        display: 'flex', // Use flexbox to center content
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        padding: '20px', // Add some internal padding
        color: 'white', // Set text color for readability
        textAlign: 'center', // Center text within the flex item
        margin: 0, // Remove default margin
        boxSizing: 'border-box'
      }}
    >
      <Typography variant="h4">
        Welcome {userRole} {user} to De Dios Dashboard
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
    </Box>
  );
};

export default Dashboard_DeDios;