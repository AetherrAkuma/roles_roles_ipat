import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const Dashboard_Chua = () => {
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

      // If the user is not an Admin, redirect them
      if (storedRole !== "Admin") {
        console.log("Not Admin, redirecting to other roles or login..."); // Debugging log
        navigate("/login"); // Redirect non-Admin roles to login
      }
    } else {
      console.log("No user or role found, redirecting to login..."); // Debugging log
      // Redirect to login if no user/role is found
      navigate("/login");
    }
  }, [navigate]);

  // Render nothing or a loading state until the user and role are confirmed
  if (!user || !userRole) {
      return null;
  }

  // Ensure nothing is rendered if somehow reached with a non-Admin role
  if (userRole !== "Admin") {
      return null;
  }

  return (
    // Use Box as the container and apply styles with the sx prop
    <Box
      sx={{
        backgroundImage: `url('https://i.pinimg.com/originals/ba/29/65/ba296569abdd28577b7b989ef7337a28.gif')`, // Background Image
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
      {/* Content centered within the Box */}
      <Typography variant="h4" gutterBottom sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Welcome {userRole} {user}
      </Typography>

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
        sx={{ marginTop: '20px' }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard_Chua;