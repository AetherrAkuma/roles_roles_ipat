import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const Dashboard_Ambuyo = () => { // Updated component name
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

      if (storedRole !== "Staff_1") { // Updated role check
        console.log("Not Ambuyo, redirecting to other roles...");
        navigate("/login");
      }
    } else {
      console.log("No user or role found, redirecting to login..."); // Debugging log
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        backgroundImage: `url('https://i.pinimg.com/originals/c1/5a/e3/c15ae3e7b1ffb633a9441bcc3bc91289.gif')`, // Background Image
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
      >
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard_Ambuyo;
